import { ServerResponse } from "node:http";
import { users } from "../database/users.js";
import { validate } from 'uuid';
import { sendResponse } from "../sendResponse.js";
import { getUserById } from "../database/getUserById.js";

export const getRequest = async (response: ServerResponse) => {
  response.statusCode = 200;
  response.write(JSON.stringify(users));
  response.end();
}

export const getRequestByUserId = async (response: ServerResponse, url: string) => {
  const id = url.split('/').pop();

  if (!id || !validate(id)) {
    sendResponse(response, 400, { message: 'Invalid user ID' })
  }

  const user = await getUserById(id);
  if (!user) {
    return sendResponse(response, 404, { message: 'User does not exist. Try find another user' });
  }

  sendResponse(response, 200, user)
}