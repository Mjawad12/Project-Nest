import { assert, boolean, define, object, size, string } from "superstruct";
import CheckConnection from "../ConnectDb";
import isEmail from "is-email";
import ErrorCheck from "../Middleware/ErrorCheck";
import { v4 } from "uuid";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import tmc from "temp-mail-check";

export async function POST(req) {
  const data = await req.json();
  const db = await CheckConnection();
  const email = () => define("email", (value) => isEmail(value));
  const User = object({
    name: size(string(), 5, 20),
    password: string(),
    email: email(),
    admin: boolean(),
  });
  try {
    assert(data, User);
    if (!tmc.checkEmail(data.email)) {
      return Response.json(
        { error: "Disposable email's are not allowed." },
        { status: 400 }
      );
    }
    const hashedPassword = await bcrypt.hash(
      data.password,
      await bcrypt.genSalt(10)
    );
    const user = `"${v4()}","${data.name}","${
      data.email
    }","${hashedPassword}",false ,null,null,null `;
    const addedUser = await db.execute(`INSERT INTO users values(${user})`);
    let id = user.split(",")[0];
    id = id.slice(1, id.length - 1);
    const authtoken = JWT.sign(
      { id: user.split(",")[0] },
      process.env.JWT_STRING
    );
    return Response.json({ authtoken });
  } catch (er) {
    console.log(er.message);
    if (er.failures) {
      const error = ErrorCheck(er.failures());
      return Response.json({ error }, { status: 401 });
    } else {
      console.log(er);
      return Response.json({ error: er.message }, { status: 401 });
    }
  }
}
