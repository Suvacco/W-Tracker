import { NextResponse } from "next/server";

export async function POST(req) {
    const body = await req.json()

    console.log(body.weightValue);

    return NextResponse.json({}, {status: 200})
}