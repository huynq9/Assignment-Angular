import express from "express";
import cors from "cors";
import routerProducts from "./src/routes/products";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();

// // Middleware
// // parse application/x-www-form-urlencoded
// app.use(bodyParser.urlencoded({ extended: false }));

// // parse application/json
// app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
app.use("/api", routerProducts);
mongoose.connect("mongodb://127.0.0.1:27017/Assignment-Angular");
export const viteNodeApp = app;
