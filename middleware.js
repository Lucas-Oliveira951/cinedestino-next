import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token_login")?.value;

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/sistema/:path*",
    "/sistema/filmes/:path*",
    "/sistema/catalogo/:path*",
    "/sistema/sobre/:path*",
  ],
};
