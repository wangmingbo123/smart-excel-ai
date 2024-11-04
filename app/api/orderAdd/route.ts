import { NextResponse } from "next/server";


// prisma generate && prisma db push
// 下单
export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log(body)
    const { userId, interviewerId } = body;
    console.log(userId)
    const resOrder = await prisma.order.create({
      data: body
    })
    // todo:返回orderId
    // return NextResponse.json({ message: "success", orderId: 1 }, { status: 200 });
    return NextResponse.json({ message: "success", orderId: resOrder.id }, { status: 200 });
  } catch (error: any) {
    console.error('POST request failed:', error);
    return NextResponse.json({
      error: "An unexpected error occurred. Please try again later."
    }, { status: 500 });
  }
}