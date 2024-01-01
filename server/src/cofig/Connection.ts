import mongoose from "mongoose";
const MONGO_URL = "mongodb://127.0.0.1/ecomm";

export const MongoConnect = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Mongodb connected")
    } catch (error) {
        console.log(error);
        
    }

}