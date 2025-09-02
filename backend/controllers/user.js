import db from "../db/db.js";

export const getUser = (req, res) => {
  const user = {
    name: "jhon deo",
    email: "jhon@gmail.com",
    password: "123456789",
  };

  res.send(user);
};

export const postUser = (req, res) => {
  //receving data
  const { name, phone, email, password } = req.body;

  //validation
  if (!name || !phone || !email || !password) {
    return res.send({ message: "All field required" });
  }

  //query
  const q = "insert into user(name, phone, email, password) value(?,?,?,?)";

  //executing query
  db.query(q, [name, phone, email, password], (err, result) => {
    if (err) {
      return res.send({ message: "Error while executing query", err });
    }
    return res.send({ message: "Data inserted sucessfully", result });
  });
};
