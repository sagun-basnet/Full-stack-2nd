import db from "../db/db.js";

export const login = (req, res) => {
  const { email, password } = req.body;

  const q = "select * from user where email = ?";

  db.query(q, [email], (err, result) => {
    if (err) {
      return res.send({ message: "Error while executing query", err });
    }

    if (result.length === 0) {
      return res.send({ message: "User not found" });
    }

    if (password === result[0].password) {
      const { password, ...others } = result[0];
      return res.send({ message: "Login sucessful", data: others });
    }

    return res.send({ message: "password doesnot match" });
  });
};
