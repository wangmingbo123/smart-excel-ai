import prisma from "@/lib/prisma";
import {NextResponse} from "next/server";


// prisma generate && prisma db push
// 评价接口


export async function POST(request: Request) {
    try {
        const body = await request.json()
        console.log(body)
        const {orderId, userId, interviewerId, rating, review} = body;
        console.log(userId)
        const resReview = await prisma.review.create({
            data: body
        })
        // 更新订单状态
        const updatedOrder = await prisma.order.update({
            where: { id: parseInt(orderId) },
            data: {
                reviewed: 1 ,
                status:"Reviewed"
            },
        });
        console.log(updatedOrder)

        return NextResponse.json({message: "success", orderId: resReview.id}, {status: 200});
    } catch (error: any) {
        console.error('POST request failed:', error);
        return NextResponse.json({
            error: "An unexpected error occurred. Please try again later."
        }, {status: 500});
    }
}