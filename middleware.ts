import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';

export async function middleware(req: NextRequest) {
  // Verify JWT-Token 
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const isAuth = !!token;

  // list of protected routes
  const protectedPaths = ['/protected'];

  const isProtectedPath = protectedPaths.some((path) =>
    req.nextUrl.pathname.startsWith(path)
  );

  if (isProtectedPath && !isAuth) {
    // redirection to login page if not logged in
    return NextResponse.redirect(new URL('/api/auth/signin', req.url));
  }

  return NextResponse.next();
}

// pages protected with middleware
export const config = {
  matcher: ['/protected/:path*'], // all pages in /protected directory
};
