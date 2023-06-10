import express from "express";
import { create, get, remove, update } from "../controllers/color";

const router = express.Router();
router.get("/colors/:id?", get);
router.post("/colors", create);
router.delete("/colors/:id", remove);
router.put("/colors/:id", update);
export default router;
