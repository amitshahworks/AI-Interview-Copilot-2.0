import { Request, Response } from "express";
import Interview from "../models/interview";

export const createInterview = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    const { mode } = req.body;

    const userId = (req as any).user.id;

    if (!mode) {
      res.status(400).json({
        success: false,
        message: "Interview mode is required",
      });
      return;
    }

    const interview = await Interview.create({
      userId,
      mode,
    });

    res.status(201).json({
      success: true,
      interview,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};