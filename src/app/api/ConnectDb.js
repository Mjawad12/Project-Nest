import mysql from "mysql2/promise";

var db;

const connectDb = async () => {
  if (!db) {
    console.log("no pool present");
    db = await mysql.createConnection({
      host: "localhost",
      database: "projectnest",
      user: "root",
      password: "jawad123",
      port: "3306",
    });
  } else {
    console.log("pool present");
  }
};

export default async function CheckConnection() {
  await connectDb();

  return db;
}
