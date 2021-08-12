/**
 * Required External Modules
 */

import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { correiosRouter } from "./correios-tracking/correios-tracking.router";
import { errorHandler } from "./middleware/error.midleware";
import { notFoundHandler } from "./middleware/not-found.middleware";
import { loginRouter } from "./login/login.router";
import { requireJwtMiddleware } from "./middleware/authz.middleware";

dotenv.config();

/**
 * App Variables
 */

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);

const app = express();

/**
 *  App Configuration
 */

app.use(helmet());
app.use(cors());
app.use(express.json());

// Set up middleware to protect the /protected route. This must come before routes.
// If you want to protect _all_ routes instead of just /protected, uncomment the next line
// app.use(authMiddleware);
//app.use("/api/login", loginRouter);
app.use("/api/login", loginRouter);
app.use("/api/correios/track", correiosRouter);

//endpoints under this will be secured
//uncomment next line if you want to apply jwt tokens
//app.use(requireJwtMiddleware);

app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

function authMiddleware(arg0: string, authMiddleware: any) {
  throw new Error("Function not implemented.");
}
