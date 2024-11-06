// 根据token 获得userid
import { getInterviewerPayOrderKey, getInterviewerUidOrderKey } from "@/lib/constants";
import redis from "@/lib/redis";
import { getCurrentUser } from "@/lib/session";
import { UserInfo } from "@/types/user";
import { NextResponse } from "next/server";


// 获得登录者信息
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const token = request.headers.get("token")
    console.log(body)
    const user = await getCurrentUser() as UserInfo
    console.log(user)
    if (!user) {
      return NextResponse.json({ message: "error" }, { status: 200 });
    }

    //
    const key = getInterviewerPayOrderKey(user.userId);
    const numStr = await redis.get(key) as string
    user.coin = numStr



    return NextResponse.json({ message: "success", user: user }, { status: 200 });
  } catch (error: any) {
    console.error('POST request failed:', error);
    return NextResponse.json({
      error: "An unexpected error occurred. Please try again later."
    }, { status: 500 });
  }
}

// 获得登录者信息
export async function GET(request: Request) {
  try {
    const token = request.headers.get("token")


    let user = await getCurrentUser() as UserInfo
    console.log(user)
    // if (!user) {
    //   return NextResponse.json({ message: "error" }, { status: 200 });
    // }


    //
    const key = getInterviewerUidOrderKey({ userId: "14872046" });
    const numStr = await redis.get(key) as string
    // if (!user) {
    //   user.coin = numStr
    // }
    const user1 = {
      userId: "14872046",
      coin: numStr
    }



    return NextResponse.json({ message: "success", user: user1 }, { status: 200 });
  } catch (error: any) {
    console.error('POST request failed:', error);
    return NextResponse.json({
      error: "An unexpected error occurred. Please try again later."
    }, { status: 500 });
  }
}