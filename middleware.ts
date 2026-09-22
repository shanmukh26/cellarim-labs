import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const PASSTHROUGH = [
  "/assets/",
  "/css/",
  "/js/",
  "/fonts/",
  "/logos/",
  "/_next/",
  "/index.html",
  "/favicon.png",
  "/favicon.ico",
  "/logo-dark.jpg",
  "/logo-green.jpg",
  "/logo-icon-twotone.png",
  "/wordmark-white.jpg",
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PASSTHROUGH.some((p) => pathname === p || pathname.startsWith(p))) {
    return NextResponse.next();
  }

  if (pathname === "/" || pathname === "") {
    return NextResponse.rewrite(new URL("/index.html", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
