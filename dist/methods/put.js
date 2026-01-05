import { users } from "../database/users.js";
import { v4, validate } from 'uuid';
import { sendResponse } from "../utils/sendResponse.js";
export const updateUser = async ({ id, username, age, hobbies }) => {
    return new Promise((resolve) => {
        const index = users.findIndex((user) => user.id === id);
        if (index === -1) {
            resolve(null);
        }
        else {
            users[index] = { id, username, age, hobbies };
            resolve(users[index]);
        }
    });
};
export const putRequest = async (request, response, url) => {
    const id = url.split('/').pop();
    if (!id || !validate(id)) {
        sendResponse(response, 400, { message: 'Invalid user ID' });
    }
    const user = users.find((user) => user.id === id);
    if (!user) {
        return sendResponse(response, 404, { message: 'User does not exist. Try find another user' });
    }
    let body = "";
    request.on('data', chunk => (body += chunk));
    request.on('end', async () => {
        try {
            const data = JSON.parse(body);
            const { username, age, hobbies } = data;
            if (!username || typeof age !== 'number' || !Array.isArray(hobbies)) {
                sendResponse(response, 400, { message: 'Missing or invalid arguments: username: string, age: number, hobbies: Array<string>' });
                return;
            }
            const updateUser = { id: v4(), username, age, hobbies };
            sendResponse(response, 201, updateUser);
        }
        catch {
            sendResponse(response, 500, { message: 'Server Error' });
        }
    });
};
// - **PUT** `api/users/{userId}` используется для обновления существующего пользователя
// - Сервер должен отвечать со status code 200 и обновлённой записью
// - Сервер должен отвечать со status code 400 и соответствующим сообщением, 
// если userId невалиден (не uuid)
// - Сервер должен отвечать со status code 404 и соответствующим сообщением,
// если записи с id === userId не существует
