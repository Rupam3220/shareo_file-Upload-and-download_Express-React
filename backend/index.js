import express from "express";
import router from "./routes/routes.js";
import cors from "cors";
import dbConnect from "./config/dbConfig.js";
import dotenv from "dotenv";
dotenv.config()

const app = express()
const port = process.env.PORT
const DATABASE_URL = process.env.DATABASE_URL

app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/", router)

dbConnect(DATABASE_URL)

app.listen(port, () => {
    console.log(`Server is listening at port: ${port}`)
})