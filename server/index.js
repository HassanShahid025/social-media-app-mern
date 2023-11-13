import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import { connectDB } from "./database/connect.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.CONNECTION_URL);
    app.listen(PORT, console.log(`Server listening at port: ${PORT}`));
  } catch (error) {
    console.log(error);
  }
};
start();
