import { UserI } from "../types/user";
import { users } from "./users.js";

export const getUserById = async (id: any): Promise<UserI | null> => {
  return new Promise((resolve) => {
    const findUserById = users.find((user) => user.id === id) ?? null;
    resolve(findUserById);
  });
};