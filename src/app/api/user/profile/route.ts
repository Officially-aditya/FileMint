// /app/api/user/profile/route.ts
import { NextResponse } from "next/server";
import connectMongo from "@/app/routes/mongo";
import User from "@/app/models/user";
import jwt from "jsonwebtoken";

export async function GET(req: Request) {
  try {
    await connectMongo();

    const authHeader = req.headers.get("authorization");
    const token = authHeader?.split(" ")[1];

    if (!token) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const decoded: any = jwt.verify(token, process.env.JWT_SECRET!);
    const user = await User.findById(decoded.userId).select("-password");

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("API error:", error);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
