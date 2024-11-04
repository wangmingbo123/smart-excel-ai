import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

const paymentDetails1 = {
  id: "ORD-12345",
  interviewerName: "Alice Johnson",
  interviewerAvatar: "/placeholder.svg?height=50&width=50",
  expertise: "Frontend Development",
  date: "2023-07-01",
  time: "14:00",
  duration: 60,
  price: 50,
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug // 'a', 'b', or 'c'
  console.log(slug)
  const paymentDetails = await prisma.order.findUnique({
    where: {
      id: parseInt(slug)
    }
  })
  console.log(paymentDetails)

  return NextResponse.json({ paymentDetails: paymentDetails }, { status: 200 });
}