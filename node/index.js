import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import db from "./db/db.js";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api", userRoute); // http://localhost:5555/api/get-user
app.use("/api", authRoute); // http://localhost:5555/api/register

app.listen(port, () => {
  console.log(`Server is started at port: ${port}`);
});
