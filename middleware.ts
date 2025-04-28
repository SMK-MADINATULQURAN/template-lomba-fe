import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'
import { jwtDecode } from "jwt-decode";
 
// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  //  NextResponse.rewrite(new URL('/home', request.url))

  let token = request.cookies.get("token-app")
 
  // const decoded:any = jwtDecode(token?.value as string);
  // console.log("deckide", decoded)
  // console.log("token", decoded.name)
  NextResponse.next()
}
 
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: '/about/:path*',
// }