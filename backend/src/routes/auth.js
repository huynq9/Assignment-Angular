import express from "express";
import { signin, signup } from "../controllers/auth";

const router = express.Router();
// const routerAuth = express.Router();
router.post("/signin", signin);
router.post("/signup", signup);
export default router;
