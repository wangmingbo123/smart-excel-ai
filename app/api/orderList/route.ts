import { NextResponse } from "next/server";

const orders = [
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


export async function GET(request: Request) {

  const url = new URL(request.url);
  console.log(url)
  const queryParamValue = url.searchParams.get('userId') as string;
  console.log(queryParamValue)

  return NextResponse.json({ orders: orders })
}