import express from "express";
import { create, get } from "../controllers/products";
const router = express.Router();
router.get("/products/:id?", get);
router.post("/products", create);
export default router;
