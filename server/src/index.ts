import express from "express";
import "dotenv/config";
import cors from "cors";
import session from "express-session";

import { MongoConnect } from "./cofig/Connection";
import Userrouter from "./routes/index";
import productRoute from "./routes/products"
const PORT = process.env.PORT;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors());

app.use(session({
    secret:"secrret",
    resave:false,
    saveUninitialized:true
}))

MongoConnect();

app.use('/api/v1/user', Userrouter)
app.use('/api/v1/products',productRoute)
app.use('/', (req: express.Request, res: express.Response) => {
    res.send("Hey ")
})

app.listen(5000, () => {
    console.log("Server is running!")
})