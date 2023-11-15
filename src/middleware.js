import { NextResponse, NextRequest } from "next/server";

import { jwtVerify, createRemoteJWKSet } from "jose";

const hankoApiUrl = process.env.NEXT_PUBLIC_HANKO_API;

export async function middleware(req) {
    const hanko = req.cookies.get("hanko")?.value;

    const JWKS = createRemoteJWKSet(
        new URL(`${hankoApiUrl}/.well-known/jwks.json`)
    );

    try {
        const verifiedJWT = await jwtVerify(hanko ?? "", JWKS);
    } catch {
        return NextResponse.redirect(new URL("/", req.url));
    }
}

export const config = {
    matcher: ["/dashboard/:path*", "/domain/:path*", "/tokens", "/wallet/:path*"],
};
