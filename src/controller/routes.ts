import { Router } from "express";
import path from "node:path";
import UserController from "./user";

const router = Router();

router.get("/ok", (req, res) => {
  res.send({ msg: "Server Active" });
});

router.get("*", (req, res) => {
  const filePath = path.join(process.cwd());
  res.sendFile(filePath);
});

router.use("/user", UserController);
export default router;
