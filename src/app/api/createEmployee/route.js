import { headers } from "next/headers";
import CheckConnection from "../ConnectDb";
import { v4 } from "uuid";
import authorize from "../Middleware/Authorize";
import bcrypt from "bcrypt";
import { assert, define, object, size, string } from "superstruct";
import isEmail from "is-email";
import ErrorCheck from "../Middleware/ErrorCheck";

export async function POST(req) {
  const db = await CheckConnection();
  const data = await req.json();
  const email = () => define("email", (value) => isEmail(value));
  const User = object({
    username: size(string(), 5, 20),
    password: string(),
    email: email(),
    profilepic: string(),
    description: string(),
  });
  try {
    assert(data, User);
    const authtoken = await headers().get("authtoken");
    const id = await authorize(authtoken);
    if (id === "Not Authorized") {
      throw new Error("Not Authorized");
    }
    const hashedPassword = await bcrypt.hash(
      data.password,
      await bcrypt.genSalt(10)
    );
    const user = `"${v4()}","${data.username}","${
      data.email
    }","${hashedPassword}",false ,"${id}" ,"${data.profilepic}","${
      data.description
    }" `;
    await db.execute(`INSERT INTO users VALUES(${user})`);
    return Response.json("added");
  } catch (er) {
    console.log(er.message);
    if (er.failures) {
      const error = ErrorCheck(er.failures());
      return Response.json({ error }, { status: 401 });
    } else {
      return Response.json({ error: er.message }, { status: 401 });
    }
  }
}
