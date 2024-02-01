import express from "express";
import { jwtVerify } from "../helpers/index";
import { JwtPayload } from "jsonwebtoken";

export const authenticate = (req: express.Request, res: express.Response,next: express.NextFunction) => {
  const token = req.headers.authorization.split(" ")[1] ;

  if (!token) {
    res.json({ messgae: "Please Login in " });
  } else {
    try {
      const data = jwtVerify(token) as JwtPayload;
      res.locals.userDetails = data;
      return next();
    } catch {
      res.send("token not valid");
    }
  }
};
