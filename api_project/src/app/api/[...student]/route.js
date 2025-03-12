import { NextResponse } from "next/server";

export async function GET(params, content) {
  const contentRes = await content;
  const contentResp = await contentRes;
  const detail = await contentResp.params;
  return NextResponse.json({ result: detail.student, success: true }, { status: 211 });
}
