import express from "express";
import "dotenv/config";
import cors from "cors";
import { MongoConnect } from "./cofig/Connection";
import Userrouter from "./routes/index";
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

MongoConnect();

app.use('/api/v1/user', Userrouter)

app.listen(5000, () => {
    console.log("Server is running!")
})