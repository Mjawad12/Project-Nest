import CheckConnection from "../ConnectDb";

export async function GET() {
  const db = await CheckConnection();

  const data = await db.execute("SELECT * FROM users");

  return Response.json(data[0]);
}
