import express from "express";
import {addProducts, filterResults, getProductById, getProducts, homeProducts, searchData} from "../controllers/product"

const productRoute = express.Router();

productRoute.post("/addProducts",addProducts)
productRoute.get("/getProducts",getProducts)
productRoute.get("/getHomeProducts",homeProducts)
productRoute.get("/getProductId/:id", getProductById);
productRoute.get("/searchData", searchData);
productRoute.get("/filterData", filterResults);

export default productRoute;
    