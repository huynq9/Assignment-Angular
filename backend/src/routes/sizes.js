import express from "express";
import { create, get, remove, update } from "../controllers/size";

const router = express.Router();
router.get("/sizes/:id?", get);
router.post("/sizes", create);
router.delete("/sizes/:id", remove);
router.put("/sizes/:id", update);
export default router;
