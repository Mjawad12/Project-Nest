import { headers } from "next/headers";
import CheckConnection from "../ConnectDb";
import { v4 } from "uuid";
import authorize from "../Middleware/Authorize";
import bcrypt from "bcrypt";
import { assert, define, object, size, string } from "superstruct";
import isEmail from "is-email";

export async function POST(req) {
  const db = await CheckConnection();
  const email = () => define("email", (value) => isEmail(value));
  const User = object({
    name: size(string(), 5, 20),
    password: string(),
    email: email(),
  });
  try {
    assert(data, User);
    const data = await req.json();
    const authtoken = await headers().get("authtoken");
    const id = await authorize(authtoken);
    if (id === "Not Authorized") {
      throw new Error("Not Authorized");
    }
    const hashedPassword = bcrypt.hash(data.password, bcrypt.genSalt(10));
    const user = `"${v4()}","${data.name}","${
      data.email
    }","${hashedPassword}",false ,"${id}" ,"${data.profilepic}","${
      data.description
    }" `;
    await db.execute(`INSERT INTO users VALUES(${user})`);
    return Response.json("added");
  } catch (error) {
    return Response.json({ error: error.message });
  }
}
