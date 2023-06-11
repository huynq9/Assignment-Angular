import express from "express";
// import { create, get } from "../controllers/products";
import { login, register } from "../controllers/auth";
const router = express.Router();
router.get("/auth/login?", login);
router.post("/products/register", register);
export default router;
