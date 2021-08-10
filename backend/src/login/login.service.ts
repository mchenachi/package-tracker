/**
 * Data Model Interfaces
 */
import { LoginBase } from './login.interface';
import * as dotenv from "dotenv";

dotenv.config();
const jwt = require("jsonwebtoken");

 /**
  * In-Memory Store
  */
 
 let userExample: LoginBase = {
	 username: "test",
	 password: "test"
 }
 
 
 /**
  * Service Methods
  */
 
 export const authentication = async (user: LoginBase): Promise<string> => {
	 if (user.username === "test" && user.password === "test") {
		 const id = 1;
		 const token = jwt.sign({ id }, process.env.SECRET, {
			expiresIn: 300 // seconds
		 })
		 return token
	 }
	 
	 return "Login invalido";
};
 
export const removeAuth = async (): Promise<object> => {
	return {auth: false, token: null}
}