import { clerkMiddleware,createRouteMatcher } from "@clerk/nextjs/server";

const protectedRoutes= createRouteMatcher([
  '/',
  '/upcoming',
  '/previous',
  '/recordings',
  '/personal-room',
  '/meeting(.*)'//(.*) is for matching all the meeting routes
])
export default clerkMiddleware((auth,req)=>{
  if(protectedRoutes(req)) auth().protect();// this set all the routes to private and when you are signed in you can proceed further
})

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};