import { IncomingMessage, ServerResponse } from "node:http";
import { users } from "../database/users.js";
import { v4 } from "uuid";
import { sendResponse } from "../utils/sendResponse.js";

export const postRequest = async (request: IncomingMessage, response: ServerResponse) => {
  let body = ""
  request.on('data', chunk => ( body += chunk ));
  request.on('end', async () => {
    try {
      const data = JSON.parse(body);
      const { username, age, hobbies } = data;
        
      if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
        sendResponse(response, 400, { message: 'Missing or invalid arguments: username: string, age: number, hobbies: Array<string>' });
        return;
      }
        
      const newUser = { id: v4(), username, age, hobbies };
      await users.push(newUser);
      sendResponse(response, 201, newUser);
    } catch {
      sendResponse(response, 500, { message: "Server error" })
    }
  });
}