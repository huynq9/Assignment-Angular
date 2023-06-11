import express from "express";
import cors from "cors";
import routerProducts from "./src/routes/products";
import routerColor from "./src/routes/colors";
import routerSize from "./src/routes/sizes";

import routerCategories from "./src/routes/categories";
import mongoose from "mongoose";

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", routerProducts);
app.use("/api", routerColor);
app.use("/api", routerSize);
app.use("/api", routerCategories);

mongoose.connect("mongodb://127.0.0.1:27017/Assignment-Angular");
export const viteNodeApp = app;
