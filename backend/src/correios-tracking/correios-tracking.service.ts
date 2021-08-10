/**
 * Data Model Interfaces
 */
import { Base, Response } from './correios-tracking.interface';

/**
 * In-Memory Store
 */

let trackingCode: Base = {
	code: "test"
}

let response: Response = {
	code: trackingCode.code,
	id: 1
}


/**
 * Service Methods
 */

export const find = async (code: string): Promise<Response> => {
	return response
};