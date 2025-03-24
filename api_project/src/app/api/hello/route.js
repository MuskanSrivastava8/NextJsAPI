import { Product } from "@/lib/model/product";
import { NextResponse } from "next/server";
import { ConnectDB } from "@/lib/db";

export async function GET(params) {
  const data = await Product.find();
  return NextResponse.json({ result: data});
}
