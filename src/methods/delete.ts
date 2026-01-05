import { IncomingMessage, ServerResponse } from "node:http";
import { users } from "../database/users.js";
import { validate } from 'uuid';
import { sendResponse } from "../utils/sendResponse.js";
import { removeUser } from "../database/removeUser.js";

export const removeRequest = async (response: ServerResponse, url: string) => {
  const id = url.split('/').pop();

  if (!id || !validate(id)) {
    sendResponse(response, 400, { message: 'Invalid user ID' })
  }

  const user = users.find((user) => user.id === id);
  if (!user) {
    return sendResponse(response, 404, { message: 'User does not exist. Try find another user' });
  }

  await removeUser(user.id);
  return sendResponse(response, 204, {});
}


// - **DELETE** `api/users/{userId}` используется для удаления существующего пользователя из базы данных

// - Сервер должен отвечать со status code 204, если запись найдена и удалена
// - Сервер должен отвечать со status code 400 и соответствующим сообщением, если userId невалиден (не uuid)
// - Сервер должен отвечать со status code 404 и соответствующим сообщением, если записи с id === userId не существует