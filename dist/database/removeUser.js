import { users } from "./users.js";
export const removeUser = async (id) => {
    return new Promise((resolve) => {
        const index = users.findIndex((user) => user.id === id);
        if (index === -1) {
            resolve(null);
        }
        else {
            users.splice(index, 1);
            resolve(users[index]);
        }
    });
};
