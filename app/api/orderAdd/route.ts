import { NextResponse } from "next/server";

// 下单
export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log(body)
    const { userId, interviewerId } = body;
    console.log(userId)

    return NextResponse.json({ message: "success" }, { status: 200 });
  } catch (error: any) {
    console.error('POST request failed:', error);
    return NextResponse.json({
      error: "An unexpected error occurred. Please try again later."
    }, { status: 500 });
  }
}