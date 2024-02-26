import CheckConnection from "../ConnectDb";

export default async function GET() {
  const db = await CheckConnection();
  const data = await db.execute(
    'INSERT INTO users values(2 , "ali" , "ali@gmail.com" , "ali123" )'
  );
  console.log(data);
  return Response.json(data[0]);
}
