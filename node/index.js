import express from "express";
import { configDotenv } from "dotenv";
configDotenv();

import userRoute from "./routes/userRoute.js";

const app = express();
const port = process.env.PORT;

app.use(express.json());

app.use("/api", userRoute); // http://localhost:5555/api/get-user

app.listen(port, () => {
  console.log(`Server is started at port: ${port}`);
});
