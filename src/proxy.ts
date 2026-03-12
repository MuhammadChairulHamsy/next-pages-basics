// src/proxy.ts
import { NextRequest, NextResponse } from "next/server";
import { withAuth } from "./middlewares/withAuth";

const proxyHandler = (req: NextRequest) => {
  return NextResponse.next();
};

export const proxy = withAuth(proxyHandler);

export const config = {
  matcher: [
    "/profile/:path*",
    "/admin/:path*",
  ],
};