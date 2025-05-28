import {config} from "dotenv";
import express from "express";
import cors from "cors";
import connectToDatabase from "./config/connectToDatabase.js";

import urlRoutes from "./routes/url.route.js";

//.env for files.
config();

const app = express();

//Middlewares
app.use(express.json())
app.use(cors());

//Routes
app.use("/api/create", urlRoutes)

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server running 🚀 on: "http://localhost/${PORT}"`);
    connectToDatabase();
})