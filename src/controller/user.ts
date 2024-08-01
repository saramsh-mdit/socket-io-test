import { Router } from "express";

const UserController = Router();

UserController.post("/register", async (req, res) => {
  res.send({ token: "s" });
});

UserController.post("/login", async (req, res) => {
  res.send({ token: "s" });
});

export default UserController;
