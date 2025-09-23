import db from "../db/db.js";

export const getUser = (req, res) => {
  const q = "select * from user";
  db.query(q, (err, result) => {
    if (err) return res.send({ message: "Error while executing query" });

    return res.send({ message: "Query excuted", result });
  });
};

export const getSingleUser = (req, res) => {
  const id = req.params.id;
  const q = "select * from user where id = ?";
  db.query(q,[parseInt(id)] ,(err, result) => {
    if (err) return res.send({ message: "Error while executing query" });

    return res.send({ message: "Query excuted", result });
  });
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

export const editUser = (req, res) => {
  const id = req.params.id;
  const { name, phone, email, password } = req.body;

  //validation
  if (!name || !phone || !email || !password) {
    return res.send({ message: "All field required" });
  }

  const q = "update user set name=?, phone=?, email=?, password=? where id=?";

  db.execute(q, [name, phone, email, password, id], (error, result) => {
    if (error) {
      return res.send({ message: "Error while excuteing quart", error });
    }

    return res.send({ message: "User updated sucessfully", result });
  });
};

export const deleteUser = (req, res) => {
  const id = req.params.id;

  const q = "delete from user where id= ?";

  try {
    db.query(q, [id], (err, result) => {
      if (err) {
        return res.send({ message: "Error while excuteing query", err });
      }

      return res.send({ message: "User deleted sucessfully", result });
    });
  } catch (err) {
    res.send({ message: "Error while running deleteUser", err });
  }
};
