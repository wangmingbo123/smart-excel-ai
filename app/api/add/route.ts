import { NextResponse } from "next/server";

// name: "",
// email: "",
// expertise: "",
// experience: "",
// hourlyRate: "",
// bio: "",
// selfIntroduction: "",

interface Interviewer {
  id: number
  name: string
  expertise: string
  experience: string
  price: number
  avatar: string
  rating: number
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log(body)
    const { userId, name, email, expertise, price, avatar, rating } = body;
    console.log(userId)
    console.log(name)
    // if (!userId) {
    //   return unauthorizedResponse("Your account was not found");
    // }
    //todo:


    return NextResponse.json({ checkoutURL: "hello" }, { status: 200 });
  } catch (error: any) {
    console.error('POST request failed:', error);
    return NextResponse.json({
      error: "An unexpected error occurred. Please try again later."
    }, { status: 500 });
  }
}