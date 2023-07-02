import dbConnect from "@/lib/dbConnect";
import Weight from "@/models/Weight";
import { NextResponse } from "next/server";

export async function POST(req) {
    await dbConnect()

    const body = await req.json()

    await Weight.create({weight: body.weight, date: new Date()})

    return NextResponse.json({}, {status: 200})
}