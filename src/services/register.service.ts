import userRepo from "../repositories/user.repo";
import User from "../models/user.model";
import passwordUtils from "../utils/password.utils";

export default {
    register: async (name: string, email: string, password: string) => {
        const passwordHash = passwordUtils.encryptPass(password)
        await userRepo.createUser({ name, email, password: passwordHash } as User)
    },
};
