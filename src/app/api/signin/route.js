import { assert, define, object, size, string } from "superstruct";
import CheckConnection from "../ConnectDb";
import isEmail from "is-email";
import bcrypt from "bcrypt";
import JWT from "jsonwebtoken";
import ErrorCheck from "../Middleware/ErrorCheck";
export async function POST(req) {
  const db = await CheckConnection();
  const data = await req.json();

  const email = () => define("email", (val) => isEmail(val));

  const User = object({
    email: email(),
    password: string(),
  });

  try {
    assert(data, User);
    const selectedUser = await db.execute(
      `SELECT * FROM users WHERE email="${data.email}"`
    );
    let S_user = selectedUser[0][0];
    if (selectedUser[0].length === 0) {
      return Response.json({
        error: { key: "email", message: "Invalid email!" },
      });
    } else {
      const checked = await bcrypt.compare(data.password, S_user.password);
      if (checked) {
        const authtoken = JWT.sign(
          { id: S_user.userid },
          process.env.JWT_STRING
        );
        return Response.json({ authtoken: authtoken });
      } else {
        return Response.json(
          {
            error: { key: "password", message: "Invalid password!" },
          },
          { status: 401 }
        );
      }
    }
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
