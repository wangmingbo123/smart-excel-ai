import {getCurrentUser} from "@/lib/session";
import {UserInfo} from "@/types/user";
import {NextResponse} from "next/server";
import {getInterviewerPayOrderKey} from "@/lib/constants";
import redis from "@/lib/redis";
import {JWT} from "next-auth/jwt";
import prisma from "@/lib/prisma";

// 同步user,调用接口
export async function POST(request: Request) {
    try {
        const body = await request.json()
        console.log(body)
        await upsertUser(body, "github")

        return NextResponse.json({message: "success"}, {status: 200});
    } catch (error: any) {
        console.error('POST request failed:', error);
        return NextResponse.json({
            error: "An unexpected error occurred. Please try again later."
        }, {status: 500});
    }
}

async function upsertUser(userInfo: UserInfo, provider: string) {
    const userId = userInfo.userId
    const userData = {
        userId: userInfo.userId,
        username: userInfo.username,
        avatar: userInfo.avatar,
        email: userInfo.email,
        platform: provider,
    };
    const user = await prisma.user.upsert({
        where: {userId: userId},
        update: userData,
        create: {...userData, role: 0},
    });
    return user || null;
}