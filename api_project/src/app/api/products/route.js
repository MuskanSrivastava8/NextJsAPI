import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function GET(params) {
  await mongoose
    .connect(process.env.connectionSrt)
    .then((result) => console.log("connected to db"))
    .catch((err) => console.log(err));
  return NextResponse.json({ result: true });
}
