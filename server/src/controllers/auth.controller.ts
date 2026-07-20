import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/User";
import { registerSchema, loginSchema } from "../validators/auth.validator";
import { generateToken } from "../utils/jwt";
import { setAuthCookie } from "../utils/cookie";

export const register = async (req: Request, res: Response) => {
  try {
    const validatedData = registerSchema.parse(req.body);

    const existingUser = await User.findOne({
      email: validatedData.email,
    });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const hashedPassword = await bcrypt.hash(validatedData.password, 10);

    const user = await User.create({
      ...validatedData,
      password: hashedPassword,
    });

    const token = generateToken(user._id.toString());

    setAuthCookie(res, token);

    const { password, __v, ...safeUser } = user.toObject();

    return res.status(201).json({
      success: true,
      message: "Account created successfully",
      token,
      user: safeUser,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const validatedData = loginSchema.parse(req.body);

    const user = await User.findOne({
      email: validatedData.email,
    });

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      validatedData.password,
      user.password,
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = generateToken(user._id.toString());

    setAuthCookie(res, token);

    const { password, __v, ...safeUser } = user.toObject();

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: safeUser,
    });
  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const logout = async (_req: Request, res: Response) => {
  res.clearCookie("token");

  return res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
