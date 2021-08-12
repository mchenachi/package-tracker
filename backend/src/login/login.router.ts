import express, { Request, Response } from "express";
import { Session } from "./login.interface";
import * as dotenv from "dotenv";
import { encodeSession } from "../common/jwt-token";

dotenv.config();

/**
 * Router Definition
 */
export const loginRouter = express.Router();

// Set up an HTTP Post listener at /sessions, which will "log in" the caller and return a JWT
loginRouter.post("/sessions", async (req: Request, res: Response) => {
  // This route is unprotected, anybody can call it
  // TODO: Validate username/password
  var secret = process.env.SECRET ? process.env.SECRET : "";
  const session = encodeSession(secret, {
    id: 1,
    username: "some user",
    dateCreated: 1,
  });

  res.status(201).json(session);
});

// Set up an HTTP Get listener at /protected. The request can only access it if they have a valid JWT token
loginRouter.get("/protected", async (req: Request, res: Response) => {
  // The auth middleware protects this route and sets res.locals.session which can be accessed here
  const session: Session = res.locals.session;

  res.status(200).json({ message: `Your username is ${session.username}` });
});
