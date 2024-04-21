import express from "express";
import { signup, login } from "../controller/user.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/login", login);

// Add a middleware function to log when server is up and running
router.post("/check2", (req, res) => {
  console.log("Server is up and running");
  res.send("Server is up and running");
});

export default router;
