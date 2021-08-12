/**
 * Data Model Interfaces
 */
import axios from "axios";
import { CorreiosResponse } from "./correios-tracking.interface";
import * as dotenv from "dotenv";

dotenv.config();

/**
 * In-Memory Store
 */

/**
 * Service Methods
 */

export const find = async (code: string): Promise<CorreiosResponse[]> => {
  var url: string = `https://api.linketrack.com/track/json?user=${process.env.LINKE_TRACK_USER}&token=${process.env.LINKE_TRACK_TOKEN}&codigo=${code}`;

  var res = await axios.get<CorreiosResponse[]>(url).then((res) => {
    return res.data;
  });

  return res;
};
