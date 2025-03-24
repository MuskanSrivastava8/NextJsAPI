import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/db";

ConnectDB();
export async function GET(params) {
  const data = await Product.find();
  return NextResponse.json({ result: data ,success:true});
}

export async function POST(request) {
  const payload = await request.json();
  console.log("payload",payload);
  let product = new Product(payload);
  const result = await product.save();
  return NextResponse.json({ result, success: true });
}
