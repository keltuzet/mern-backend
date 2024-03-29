import { Request, Response } from "express";

export const uploadFile = (req: Request, res: Response) => {
  res.json({
    url: `/uploads/${req.file?.originalname}`,
  });
};
