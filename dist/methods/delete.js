import { users } from "../database/users.js";
import { validate } from 'uuid';
import { sendResponse } from "../utils/sendResponse.js";
import { removeUser } from "../database/removeUser.js";
export const removeRequest = async (response, url) => {
    try {
        const id = url.split('/').pop();
        if (!id || !validate(id)) {
            sendResponse(response, 400, { message: 'Invalid user ID' });
        }
        const user = users.find((user) => user.id === id);
        if (!user) {
            return sendResponse(response, 404, { message: 'User does not exist. Try find another user' });
        }
        await removeUser(user.id);
        return sendResponse(response, 204, {});
    }
    catch {
        sendResponse(response, 500, { message: "Server error" });
    }
};
