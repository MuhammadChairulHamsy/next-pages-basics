// middlewares/withAuth.ts
import { getToken } from "next-auth/jwt";
import {
  NextFetchEvent,
  NextRequest,
  NextResponse,
} from "next/server";

type NextProxy = (req: NextRequest, event: NextFetchEvent) => Promise<NextResponse> | NextResponse;

const onlyAdmin = ["/admin"];
const authRequired = ["/profile", "/admin"];

export const withAuth = (proxy: NextProxy) => {
  return async (req: NextRequest, event: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    // Gunakan startsWith agar /profile/xxx dan /admin/xxx juga terproteksi
    const isProtectedRoute = authRequired.some((path) =>
      pathname.startsWith(path)
    );

    if (isProtectedRoute) {
      const token = await getToken({
        req,
        secret: process.env.NEXTAUTH_SECRET,
      });

      // Belum login → redirect ke login
      if (!token) {
        const url = new URL("/auth/login", req.nextUrl.origin);
        url.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(url);
      }

      // Sudah login tapi bukan admin → redirect ke home
      const isAdminPage = onlyAdmin.some((path) => pathname.startsWith(path));
      if (isAdminPage && token.role !== "admin") {
        return NextResponse.redirect(new URL("/", req.nextUrl.origin));
      }
    }

    return proxy(req, event);
  };
};