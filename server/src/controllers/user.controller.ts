import { Response } from "express";
import { User } from "../models/User";
import { AuthRequest } from "../middleware/auth.middleware";

export async function getCurrentUser(req: AuthRequest, res: Response) {
  try {
    const user = await User.findById(req.user?.userId).select("-password");

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    return res.json({
      success: true,
      user,
    });
  } catch {
    return res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
}
