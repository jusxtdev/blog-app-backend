import express, { Response } from "express";

const rootRouter = express.Router();

rootRouter.get("/", (_req, res: Response) => {
  res.status(200).json({
    success: true,
    msg: "Blog App Backend API",
  });
});

export default rootRouter;
