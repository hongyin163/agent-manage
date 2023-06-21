import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { withAuth } from "next-auth/middleware"

export default withAuth(function middleware(req) {
  console.log(req.nextauth)
}, {
  pages: {
    signIn: "/auth/login",
    // signOut: '/auth/signout',
    // error: '/auth/error', // Error code passed in query string as ?error=
    // verifyRequest: '/auth/verify-request', // (used for check email message)
    // newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
  },
  callbacks: {
    authorized: ({ token }) => {
      return !!token;
    }
  }
})
// See "Matching Paths" below to learn more
export const config = {
  matcher: "/agent/:path*",
};
