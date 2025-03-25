import { NextResponse } from "next/server";
import { Product } from "@/lib/model/product";

export async function PUT(request, content) {
  const productIdres = await content;
  const params = await productIdres.params;
  const productId = params.productid;
  const filter = { _id: productId };
  const payload = await request.json();
  const result = await Product.findOneAndUpdate(filter, payload);
  return NextResponse.json({ result, success: true });
}
export async function GET(request, content) {
    const productIdres = await content;
    const params = await productIdres.params;
    const productId = params.productid;
    const record = { _id: productId };
    const result = await Product.findById(record);
    return NextResponse.json({ result, success: true });
  }
  export async function DELETE(request, content) {
    const productIdres = await content;
    const params = await productIdres.params;
    const productId = params.productid;
    const record={ _id: productId };
    const result = await Product.deleteOne(record);
    return NextResponse.json({ result, success: true });

  }