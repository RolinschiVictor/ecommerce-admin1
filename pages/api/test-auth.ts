import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";

export async function GET(req: Request) {
  try {
    const { userId } = await auth();
    console.log('Authenticated userId:', userId);

    if (!userId) {
      return new NextResponse("No user authenticated", { status: 401 });
    }

    return new NextResponse(`Authenticated userId: ${userId}`, { status: 200 });
  } catch (error: any) {
    console.error('[TEST_AUTH]', error.message, error.stack);
    return new NextResponse("Internal error", { status: 500 });
  }
}
