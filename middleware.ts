import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./auth";

export const middleware = async (request: NextRequest) => {
    const { nextUrl } = request;
    const session = await getSession();
    if (nextUrl.pathname.endsWith("/")) {
        return NextResponse.redirect(new URL("/home", nextUrl));
    }
    if (nextUrl.pathname.startsWith("/auth")) {
        if (session) {
            return NextResponse.redirect(new URL("/home", nextUrl));
        } else {
            return NextResponse.next();
        }
    }
    if (nextUrl.pathname.startsWith("/home")) {
        if (session) {
            return NextResponse.next();
        } else {
            return NextResponse.redirect(new URL("/auth/register", nextUrl));
        }
    }
    return NextResponse.next();
};

export const config = {
    matcher: [
        "/((?!api|_next/static|_next/image|.*\\.png$).*)",
        "/auth/:path*",
        "/home/:path*",
    ],
};