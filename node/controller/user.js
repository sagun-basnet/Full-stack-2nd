export const getUser = (req, res) => {
  res.send("I am from controller");
};

export const postUser = (req, res) => {
  const user = { email: "jhon@gmail.com", password: "1234567890" };
  const { email, password } = req.body;
  if (email === user.email) {
    if (password === user.password) {
      res.send("Login sucessfully..");
    } else {
      res.send("Password doesn't match");
    }
  } else {
    res.send("User not found");
  }
};
