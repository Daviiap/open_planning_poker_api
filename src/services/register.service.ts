import userRepo from "../repositories/user.repo";
import User from "../models/user.model";

export default {
    register: async (name: string, email: string, password: string) => {
        await userRepo.createUser({ name, email, password } as User)
    },
};
