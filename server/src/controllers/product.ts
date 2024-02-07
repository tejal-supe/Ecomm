import express from "express";
import { ProductModel } from "../modals/dataModel";

export const addProducts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {
      product_name,
      product_image,
      product_desc,
      product_subimages,
      product_cost,
      product_rating,
      product_feature,
      rated_by,
    } = req.body;
    const d = await ProductModel.create({
      product_name: product_name,
    });
    res.json({ d: d });
  } catch (error) {
    res.json({ error: error });
  }
};

export const getProducts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const data = await ProductModel.find();
    res.json({ product: data });
  } catch (error) {
    res.json({ error: error });
  }
};

export const homeProducts = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const data = await ProductModel.find().where("product_rating").gte(5);
    res.json({ products: data });
  } catch (error) {
    res.json({ error: error });
  }
};

export const getProductById = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const id = req.params.id;
    const data = await ProductModel.findById({ _id: id });
    res.json({ data: data });
  } catch (error) {
    res.json({ error: error });
  }
};

export const searchData = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const {value} = req.body
    const data = await ProductModel.find({
      product_name: { $regex: value, $options: "i" },
    });
    res.json({ products: data });
  } catch (error) {
    res.json({ error: error });
  }
};

export const filterResults = async(req:express.Request,res:express.Response)=>{
    try {
      const {obj} = req.body;
      console.log(obj,'obj')
    
    } catch (error) {
      res.json({error:error})
  }
} 