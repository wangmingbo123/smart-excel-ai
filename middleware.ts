import { NextResponse } from 'next/server';

// 和app在同一层级
export function middleware(request: Request) {
  console.log("mmmm")
  if (request.method === 'OPTIONS') {
    // 处理预检请求（OPTIONS 请求）
    return new NextResponse(null, {
      status: 204,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization',
      },
    });
    return NextResponse.next();
  }


  const response = NextResponse.next();
  response.headers.set('Access-Control-Allow-Origin', '*');
  response.headers.set('Access-Control-Allow-Methods', '*');
  // response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE,OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  return response;
}