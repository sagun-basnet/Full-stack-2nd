import express from "express";
import { configDotenv } from "dotenv";
configDotenv();

const app = express();
const port = process.env.PORT;

app.get("/api/get-data", (req, res) => {
  res.send("i am from get request");
});

app.listen(port, () => {
  console.log(`Server is started at port: ${port}`);
});

