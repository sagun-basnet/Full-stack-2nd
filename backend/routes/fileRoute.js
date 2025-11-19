import express from "express";
import { handleFile } from "../controllers/file.js";
import upload from "../middleware/multerConfig.js";

const route = express.Router();

route.post("/file", upload.single("image"), handleFile);

export default route;
