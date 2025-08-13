import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345",
  database: "merndb",
});

db.connect((err) => {
  if (err) {
    return console.log(`Error while connecting to database: ${err}`);
  }
  console.log(`Database connected sucessfully`);
});

export default db;
