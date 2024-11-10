import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

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
  skills:   String[]
  languages: String[]
  availability: String[]
  selfIntroduction:string
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    console.log(body)
    const { userId, name, expertise, experience, price, avatar, rating } = body;
    console.log(userId)
    console.log(name)
    if (!name) {
      return NextResponse.json({ message: "name is null" }, { status: 200 });
    }
    //todo:

    // const res = await prisma.interviewer.create({
    //   data: {
    //     name,
    //     expertise,
    //     experience,
    //     price,
    //     avatar,
    //     rating,
    //   }
    // })
    // 必须带唯一键
    const data = {
      userId: body.userId,
      name: body.name,
      expertise: body.expertise,
      experience: body.experience,
      price: body.price,
      avatar:body.avatar,
      skills:body.skills,
      languages:body.languages,
      availability:body.availability,
      selfIntroduction:body.selfIntroduction,
      email:body.email,
      phone:body.phone,
      images:body.images
    }
    const res = await prisma.interviewer.upsert({
      where: { name: name },
      update: data,
      create: data
    })



    console.log(res)
    // const {id} = res


    return NextResponse.json({ checkoutURL: res.id,id:res.id }, { status: 200 });
  } catch (error: any) {
    console.error('POST request failed:', error);
    return NextResponse.json({
      error: "An unexpected error occurred. Please try again later."
    }, { status: 500 });
  }
}