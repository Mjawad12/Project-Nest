import { headers } from "next/headers";
import authorize from "../Middleware/Authorize";
import CheckConnection from "../ConnectDb";

export async function POST() {
  const db = await CheckConnection();
  try {
    const headersList = headers();
    const authtoken = headersList.get("authtoken");
    const id = await authorize(authtoken);
    if (id === "Not Authorized") {
      throw new Error("Not Authorized");
    }
    const user = await db.execute(
      `SELECT userid , username , admin , email , adminId FROM users WHERE userid="${id}"`
    );
    return Response.json({ user: user[0][0] });
  } catch (error) {
    return Response.json({ error: "Not Authorized" }, { status: 401 });
  }
}
