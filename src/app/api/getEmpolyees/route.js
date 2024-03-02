import { headers } from "next/headers";
import CheckConnection from "../ConnectDb";
import authorize from "../Middleware/Authorize";

export async function GET() {
  const db = await CheckConnection();
  try {
    const headersList = headers();
    const authtoken = headersList.get("authtoken");
    const adminId = await authorize(authtoken);
    if (adminId === "Not Authorized") {
      throw new Error("Not Authorized");
    }
    const employees = await db.execute(
      `SELECT userid , username , admin , email , adminId FROM users WHERE adminId="${adminId}" `
    );
    return Response.json({ employees: employees[0][0] });
  } catch (error) {
    return Response.json({ error: "Not Authorized" }, { status: 401 });
  }
}
