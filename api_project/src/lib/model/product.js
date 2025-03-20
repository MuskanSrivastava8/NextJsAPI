import mongoose, { mongo } from "mongoose";
const productModel= new mongoose.Schema({
    name:String,
    price:String,
    company:String,
    color:String,
    catagory:String
});
export const Product = mongoose.models.products || mongoose.model("products",productModel);