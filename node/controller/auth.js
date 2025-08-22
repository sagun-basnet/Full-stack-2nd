import db from "../db/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const register = (req, res) => {
  //receiving data......
  const { name, phone, email, password, role } = req.body;

  //validating data........
  if (!name || !phone || !email || !password) {
    return res.send({ message: "All field is required" });
  }

  const salt = bcrypt.genSaltSync(10);
  const hashPassword = bcrypt.hashSync(password, salt);

  //insert query........
  const q = `insert into user(name, phone, email, password, role) value(?,?,?,?,?)`;

  //executing query.....
  db.query(q, [name, phone, email, hashPassword, role], (err, result) => {
    if (err) {
      return res.send({ message: "Error while executing quary", err });
    }
    return res.send({ message: "Registration sucessful", result });
  });
};

export const getUser = (req, res) => {
  const q = "select * from user";
  db.query(q, (err, result) => {
    if (err) return res.send({ message: "Error while executing query", err });

    return res.send({ message: "Data fetched sucessfully", result });
  });
};

export const getSingleUser = (req, res) => {
  const id = req.params.id;

  const q = "select * from user where id = ?";
  db.query(q, [parseInt(id)], (err, result) => {
    if (err) return res.send({ message: "error while excuting query", err });
    return res.send(result[0]);
  });
};

export const updateUser = (req, res) => {
  const { name, phone, email, password } = req.body;
  const id = parseInt(req.params.id);

  if (!name || !phone || !email || !password) {
    return res.send({ message: "All field is required" });
  }

  const q =
    "update user set name = ?, phone= ?, email= ?, password= ? where id = ?";

  db.query(q, [name, phone, email, password, id], (err, result) => {
    if (err)
      return res
        .status(500)
        .send({ message: "Error while executing query.", err });

    return res
      .status(200)
      .send({ message: "User updated sucessfully", result });
  });
};

export const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  const q = "delete from user where id = ?";

  db.query(q, [id], (err, result) => {
    if (err)
      return res
        .status(500)
        .send({ message: "Error while executing query.", err });

    return res
      .status(200)
      .send({ message: "User deleted sucessfully", result });
  });
};

export const login = (req, res) => {
  const { email, password } = req.body;
  console.log(req.body);

  if (!email || !password) {
    return res.send("required all field");
  }

  const q = "select * from user where email = ?";
  db.query(q, [email], (err, result) => {
    if (err) {
      return res.send({ message: "Error while excuting query" });
    }

    if (result.length === 0) {
      return res.send({ message: "User not found.", status: 0 });
    }

    const isPasswordMatch = bcrypt.compareSync(password, result[0].password);

    if (isPasswordMatch) {
      const token = jwt.sign(
        { role: result[0].role, name: result[0].name, email: email },
        "secretkey"
      );

      const { password, ...others } = result[0];

      return res.send({
        message: "Logged in sucessfully",
        others,
        status: 2,
        token: token,
      });
    }
    return res.send({ message: "Password not match", status: 1 });
  });
};
