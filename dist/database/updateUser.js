import { users } from "./users.js";
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
