import { userData } from "@/util/userdb";
import { NextResponse } from "next/server";

export async function GET(request, content) {
  const userDataRes = userData;
  const contentres = await content;
  const id = await contentres.params;
  const res = userDataRes.filter((item) => item.id == id.dbdataid);
  const data = userData;
  return NextResponse.json(res[0], { status: 200 });
}
export async function PUT(request, content) {
  let payload = await request.json();
  let contentres = await content;
  let params = await contentres.params;
  let id = params.dbdataid;
  payload.id = params.dbdataid;
  if (!payload.id || !payload.name || !payload.age) {
    return NextResponse.json(
      { result: "Data not found in payload", success: false },
      { status: 211 }
    );
  } else {
    return NextResponse.json(
      { result: payload, success: true },
      { status: 200 }
    );
  }
}
export async function DELETE(request,content){
  const contentres = await content;
  const id = await contentres.params;
  if (id) {
    return NextResponse.json(
      { result: "User data deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "User data not deleted", success: false },
      { status: 201 }
    );
  }
}
