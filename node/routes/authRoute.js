import express from "express";
import {
  deleteUser,
  getUser,
  login,
  register,
  updateUser,
} from "../controller/auth.js";

const route = express.Router();

route.post("/register", register);
route.get("/get-user", getUser);
route.post("/update-user/:id", updateUser);
route.post("/delete-user/:id", deleteUser);
route.post("/login", login);

export default route;
