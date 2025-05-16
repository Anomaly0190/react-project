import express from "express";
import { loginuser, registeruser } from "../controller/user.controller.js";

const router = express.Router();

router.post("/login", loginuser);
router.post("/register", registeruser);

export default router;
