import { NextResponse } from "next/server";

export function GET(request){
  return NextResponse.json({name:"Muskan",address :"Uttar Pradesh"},{status:200})
}