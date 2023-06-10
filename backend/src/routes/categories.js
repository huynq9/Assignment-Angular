import express from "express";
import { create, get, remove, update } from "../controllers/categories";

const router = express.Router();
router.get("/categories/:id?", get);
router.post("/categories", create);
router.delete("/categories/:id", remove);
router.put("/categories/:id", update);
export default router;
