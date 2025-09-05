import express from "express";
import {
  deleteUser,
  editUser,
  getUser,
  postUser,
} from "../controllers/user.js";

const route = express.Router();

route.get("/get-user", getUser);
route.post("/post-user", postUser);
route.put("/edit-user/:id", editUser);
route.delete("/delete-user/:id", deleteUser);

export default route;
