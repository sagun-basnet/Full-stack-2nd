export const getUser = (req, res) => {
  const user = {
    name: "jhon deo",
    email: "jhon@gmail.com",
    password: "123456789",
  };

  res.send(user);
};
