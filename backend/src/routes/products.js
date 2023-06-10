import express from "express";
import { create, get, remove, update } from "../controllers/products";

const router = express.Router();
router.get("/products/:id?", get);
router.post("/products", create);
router.delete("/products/:id", remove);
router.put("/products/:id", update);
router.patch("/products/:id", update);
export default router;
