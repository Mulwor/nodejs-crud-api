import { IncomingMessage, ServerResponse } from "node:http";
import { users } from "../database/users.js";
import { validate } from 'uuid';
import { sendResponse } from "../utils/sendResponse.js";

export const putRequest = async (request: IncomingMessage, response: ServerResponse, url: string) => {
  const id = url.split('/').pop();

  if (!id || !validate(id)) {
    sendResponse(response, 400, { message: 'Invalid user ID' })
  }

  const user = users.find((user) => user.id === id);
  if (!user) {
    return sendResponse(response, 404, { message: 'User does not exist. Try find another user' });
  }

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
        
      const updateUser = { id, username, age, hobbies };
      sendResponse(response, 200, updateUser);
    } catch {
      sendResponse(response, 500, { message: 'Server Error' });
    }
  });
}