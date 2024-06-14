import "dotenv/config";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import { DB_URL } from "./config/db.config";
import { API_URL, PORT } from "./config/app.config";
import router from "./routes";

mongoose.connect(DB_URL)
    .then(() => console.log("[Database] Connection Established."))
    .catch((err) => console.log("[Database] Connection Failed: ", err))

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use(API_URL, router)

app.listen(PORT, () => console.log(`[Server] Listening for requests at http://localhost:${PORT}`))