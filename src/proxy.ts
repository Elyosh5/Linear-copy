import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function proxy(req: NextRequest) {
  const token = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  const { pathname } = req.nextUrl;
  const isLoggedIn = !!token;

  const publicRoutes = ["/", "/login", "/signup"];
  const isPublic = publicRoutes.includes(pathname);

  if (isLoggedIn && isPublic) {
    const url = req.nextUrl.clone();
    url.pathname = `/${encodeURIComponent(token.id as string)}`;
    return NextResponse.redirect(url);
  }

  if (!isLoggedIn && !isPublic) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
