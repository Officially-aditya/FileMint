import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../../../models/user";
import { error } from "console";

// Handle POST requests to the login route
export async function POST(req: NextRequest) {
  try {
    const { email, password } = await req.json();

    // Find the user by email
    const user = await User.findOne({ email });
    if (!user) {
        console.log(error);
      return NextResponse.json({ message: "Invalid email or password." }, { status: 400 });
    }

    // Compare the provided password with the hashed password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.log(error);
      return NextResponse.json({ message: "Invalid email or password." }, { status: 400 });
    }

    // Generate JWT token
    const token = jwt.sign(
      { userId: user._id, email: user.email },
      process.env.JWT_SECRET as string, // make sure you have a JWT_SECRET in your .env
      { expiresIn: "1h" }
    );

    // Send response with the token
    return NextResponse.json({
      message: "Login successful",
      token,
    });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Server error. Please try again." }, { status: 500 });
  }
}
