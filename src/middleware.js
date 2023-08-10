import { NextResponse } from 'next/server'

export function middleware(request) {
  const response = NextResponse.next();
  response.headers.set('x-experiment', 'cloudrun');
  return response;
}

export const config = {
  matcher: '/',
}
