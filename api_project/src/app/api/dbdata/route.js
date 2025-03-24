import { userData } from "@/util/userdb"
import { NextResponse } from "next/server"

export function GET(request){
    const data = userData
    return NextResponse.json(data,{status:200})
}
export async function POST(request, response){
    const payload = await request.json()
    if(!payload.name || !payload.id){
        return NextResponse.json({result:"Data not found", success :false},{status:211})
    }
    return NextResponse.json({result:"hello", success :true},{status:200})
}