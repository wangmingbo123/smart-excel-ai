import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

const orders1 = [
  {
    id: 1,
    interviewerName: "Alice Johnson",
    interviewerAvatar: "/placeholder.svg?height=50&width=50",
    expertise: "Frontend Development",
    date: "2023-06-15",
    time: "14:00",
    duration: 60,
    price: 50,
    status: "Completed",
    reviewed: false,
  },
  {
    id: 2,
    interviewerName: "Bob Smith",
    interviewerAvatar: "/placeholder.svg?height=50&width=50",
    expertise: "Backend Development",
    date: "2023-06-20",
    time: "10:00",
    duration: 90,
    price: 75,
    status: "Upcoming",
    reviewed: false,
  },
  {
    id: 3,
    interviewerName: "Carol Williams",
    interviewerAvatar: "/placeholder.svg?height=50&width=50",
    expertise: "Full Stack Development",
    date: "2023-06-25",
    time: "16:00",
    duration: 120,
    price: 100,
    status: "Upcoming",
    reviewed: false,
  },
]

async function getOrdersByUserId(userId: string) {
  return prisma.order.findMany({
    where: {
      userId: userId,
    },
    orderBy: {
      // 假设更新时间字段名为 updatedAt，如果你的字段名不同请相应调整
      updatedAt: 'desc',
    },
  });
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  console.log(url)
  const userId = url.searchParams.get('userId') as string;
  console.log(userId)
  const orders = await getOrdersByUserId(userId)
  return NextResponse.json({ orders: orders })
}