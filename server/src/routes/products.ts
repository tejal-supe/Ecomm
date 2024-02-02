import express from "express";
import {addProducts, getProducts, homeProducts} from "../controllers/product"

const productRoute = express.Router();

productRoute.post("/addProducts",addProducts)
productRoute.get("/getProducts",getProducts)
productRoute.get("/getHomeProducts",homeProducts)

export default productRoute;
    