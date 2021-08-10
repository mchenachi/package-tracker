/**
 * Required External Modules and Interfaces
 */
import express, { Request, Response } from "express";
import * as CorreiosService from "./correios-tracking.service";
import { Base, Response as CorreiosResponse} from "./correios-tracking.interface";
//import { checkJwt } from "../middleware/authz.middleware";

/**
 * Router Definition
 */
 export const correiosRouter = express.Router();

/**
 * Controller Definitions
 */
correiosRouter.get("/:id", async (req: Request, res: Response) => {
	const id: string = req.params.id;

	try {
		const tracker: CorreiosResponse = await CorreiosService.find(id);

		if (tracker) {
			return res.status(200).send(tracker);
		}

		return res.status(404).send("Code not available");
	}
	catch (e) {
		res.status(500).send(e.message);
	}
})

//correiosRouter.use(checkJwt);