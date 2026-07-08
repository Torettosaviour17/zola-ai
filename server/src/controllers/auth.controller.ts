import { Request, Response } from "express";

export const register = async (req: Request, res: Response) => {
  try {
    res.status(201).json({
      success: true,
      message: "Register endpoint working",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    res.status(200).json({
      success: true,
      message: "Login endpoint working",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};