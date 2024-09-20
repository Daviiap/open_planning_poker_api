import { UserError } from "../errors/UserError";
import userRepo from "../repositories/user.repo"

export default {
    getUser: async (userID: number) => {
        const user = await userRepo.getUserByID(userID);

        if (!user) {
            throw new UserError({ name: "USER_NOT_FOUND_ERROR", message: `user ${userID} not found` })
        }

        return { ...user, password: undefined };
    }
}