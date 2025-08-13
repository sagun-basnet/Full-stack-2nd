import db from "../db/db.js";

export const register = (req, res) => {
  //receiving data......
  const { name, phone, email, password, role } = req.body;

  //validating data........
  if (!name || !phone || !email || !password) {
    return res.send({ message: "All field is required" });
  }

  //insert query........
  const q = `insert into user(name, phone, email, password, role) value(?,?,?,?,?)`;

  //executing query.....
  db.query(q, [name, phone, email, password, role], (err, result) => {
    if (err) {
      return res.send({ message: "Error while executing quary", err });
    }
    return res.send({ message: "Registration sucessful", result });
  });
};
