import express from "express";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();

const port = process.env.PORT;

app.use(express.json());

app.get("/get-user", (req, res) => {
  res.send("I am form backend /get-user");
});

app.post("/post-user", (req, res) => {
  const { name, email } = req.body;
  if (name) {
    res.send(`Your name is ${name} and email is ${email}`);
  } else {
    res.send(`Your name is ${name} and email is ${email}`);
  }
});

app.listen(port, () => {
  console.log(`Server is started at http://localhost:${port}`);
});
