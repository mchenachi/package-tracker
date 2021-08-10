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

dotenv.config();

/**
 * App Variables
 */

 if (!process.env.PORT) {
	process.exit(1);
 }
 
const PORT: number = parseInt(process.env.PORT as string, 10);
const jwt = require("jsonwebtoken");
 
 const app = express();

/**
 *  App Configuration
 */

 app.use(helmet());
 app.use(cors());
app.use(express.json());
app.use("/api/correios/track", correiosRouter);

app.use(errorHandler);
app.use(notFoundHandler);

/**
 * Server Activation
 */

 app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
  });