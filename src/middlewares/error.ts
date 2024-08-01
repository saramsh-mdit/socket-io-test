import { Request, Response } from "express";

export default function ErrorHandler(err: any, req: Request, res: Response) {
  console.error(err.stack);
  res.status(500);
  res.render("error", { error: err });
}
