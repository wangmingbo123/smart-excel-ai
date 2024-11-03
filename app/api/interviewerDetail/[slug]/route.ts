import { NextResponse } from "next/server";

import prisma from "@/lib/prisma";

// Mock data for the interviewer
const interviewer = {
  id: 1,
  name: "Alice Johnson",
  expertise: "Frontend Development",
  experience: "5 years",
  price: 50,
  avatar: "/placeholder.svg?height=300&width=300",
  bio: "Experienced frontend developer with a passion for creating intuitive and responsive user interfaces.",
  selfIntroduction: "Hello! I'm Alice Johnson, a frontend developer with 5 years of experience in creating beautiful and functional web applications. I specialize in React, Vue, and Angular frameworks, and I have a keen eye for design and user experience. My goal is to help you succeed in your frontend developer interviews by sharing my knowledge and experience in the field. I can provide mock interviews, code reviews, and personalized feedback to help you improve your skills and confidence. Let's work together to take your frontend development career to the next level!",
  skills: ["React", "Vue", "Angular", "CSS", "JavaScript", "TypeScript", "Responsive Design"],
  languages: ["English (Native)", "Spanish (Intermediate)"],
  availability: "Weekdays 9 AM - 5 PM EST",
  rating: 4.8,
  reviewCount: 47,
}

// Mock data for orders and reviews
const ordersAndReviews = [
  {
    id: 1,
    clientName: "John Doe",
    clientAvatar: "/placeholder.svg?height=50&width=50",
    date: "2023-05-15",
    rating: 5,
    review: "Alice was incredibly helpful! Her insights on React hooks and state management were invaluable. I feel much more confident for my upcoming interview.",
  },
  {
    id: 2,
    clientName: "Jane Smith",
    clientAvatar: "/placeholder.svg?height=50&width=50",
    date: "2023-05-10",
    rating: 4,
    review: "Great session on CSS Grid and Flexbox. Alice explained complex concepts in a very understandable way. Looking forward to our next session!",
  },
  {
    id: 3,
    clientName: "Mike Johnson",
    clientAvatar: "/placeholder.svg?height=50&width=50",
    date: "2023-05-05",
    rating: 5,
    review: "Alice's mock interview was challenging and realistic. Her feedback was constructive and helped me identify areas for improvement. Highly recommended!",
  },
]

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const slug = (await params).slug // 'a', 'b', or 'c'
  console.log(slug)
  const interviewerRes = await prisma.interviewer.findUnique({
    where: {
      id: parseInt(slug)
    }
  })
  console.log(interviewerRes)

  return NextResponse.json({ ordersAndReviews: ordersAndReviews, interviewer: interviewerRes }, { status: 200 });
}