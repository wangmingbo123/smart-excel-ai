import { getInterviewerUidOrderKey } from "@/lib/constants";
import prisma from "@/lib/prisma";
import redis from "@/lib/redis";
import { NextResponse } from "next/server";
import resendM from "@/lib/resend";


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
    // 扣减库存
    const key = getInterviewerUidOrderKey({ userId: userId.toString() })
    console.log(key)
    const numStr = await redis.get(key)
    console.log("numStr " + numStr)
    const num = numStr ? Number(numStr) : null;
    if (num == null || num < 1) {
      return NextResponse.json({ message: "error" }, { status: 200 });
    }

    redis.decrby(key, 1)
    // 发送邮件
    const interviewerRes = await prisma.interviewer.findUnique({
      where: {
        id: parseInt(interviewerId)
      }
    })
    console.log("resendM email")
    console.log(interviewerRes)
    if (interviewerRes != null && interviewerRes.email) {
      resendM(interviewerRes.email)
    }

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