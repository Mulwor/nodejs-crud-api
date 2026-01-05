import { users } from "../database/users.js";
import { validate } from 'uuid';
import { sendResponse } from "../utils/sendResponse.js";
export const getRequest = async (response) => {
    response.statusCode = 200;
    response.write(JSON.stringify(users));
    response.end();
};
export const getRequestByUserId = async (response, url) => {
    const id = url.split('/').pop();
    if (!id || !validate(id)) {
        sendResponse(response, 400, { message: 'Invalid user ID' });
    }
    const user = users.find((user) => user.id === id);
    if (!user) {
        return sendResponse(response, 404, { message: 'User does not exist. Try find another user' });
    }
    sendResponse(response, 200, user);
};
