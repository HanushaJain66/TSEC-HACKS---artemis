import dbConnect from "@/lib/db";
import User from "@/models/user";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export async function POST(req) {
  try {
    const { identifier, password, otp } = await req.json();

    // Validate user credentials
    await dbConnect();
    const user = await User.findOne({ $or: [{ email: identifier }, { phone: identifier }] });
    if (!user) {
      return new Response(JSON.stringify({ message: "User not found.", success: false }), { status: 404 });
    }

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return new Response(
        JSON.stringify({ message: "Incorrect password.", success: false }),
        { status: 401 }
      );
    }
    // Set user as verified
    user.isVerified = true;
    await user.save();

    // Generate JWT
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: "1d" });
    
    return new Response(JSON.stringify({ success: true, token }), { status: 200 });
  } catch (error) {
    console.error("Error logging in:", error);
    return new Response(JSON.stringify({ message: "Internal server error.", success: false }), { status: 500 });
  }
}