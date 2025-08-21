import express from "express";
import {
  deleteUser,
  getSingleUser,
  getUser,
  login,
  register,
  updateUser,
} from "../controller/auth.js";

const route = express.Router();

route.post("/register", register);
route.get("/get-user", getUser);
route.get("/get-single-user/:id", getSingleUser);
route.post("/update-user/:id", updateUser);
route.post("/delete-user/:id", deleteUser);
route.post("/login", login);

export default route;
