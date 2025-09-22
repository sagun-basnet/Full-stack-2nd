import express from "express";
import { configDotenv } from "dotenv";
configDotenv();
import cors from "cors";
import userRoute from "./routes/userRoute.js";
import authRoute from "./routes/authRoute.js";

const app = express();

const port = process.env.PORT;

app.use(cors());

app.use(express.json());

app.use("/", userRoute);
app.use("/", authRoute);

app.listen(port, () => {
  console.log(`Server is started at http://localhost:${port}`);
});
