import db from "../db/db.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

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

    const isPasswordCorrect = bcrypt.compareSync(password, result[0].password);

    if (isPasswordCorrect) {
      const token = jwt.sign(
        {
          user_id: result[0].id,
          role: result[0].role,
          email: result[0].email,
        },
        "secretkey"
      );

      console.log(token, ":TOKEN");

      const { password, ...others } = result[0];
      return res.send({
        message: "Login sucessful",
        data: others,
        token: token,
      });
    }

    return res.send({ message: "password doesnot match" });
  });
};
