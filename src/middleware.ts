import { authMiddleware } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// export default authMiddleware(() => {
//     console.log("Middleware Running")
//     return NextResponse.next()
// });

export default authMiddleware();

// Stop Middleware running on static files 
export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};