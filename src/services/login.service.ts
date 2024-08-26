import userRepo from "../repositories/user.repo";
import passwordUtils from "../utils/password.utils";
import { LoginError } from "../errors/LoginError";
import jwtUtils from "../utils/jwt.utils";

export default {
    login: async (email: string, password: string) => {
        const user = await userRepo.getUserByEmail(email);
        if (!user) {
            throw new LoginError({ message: "invalid login credentials", name: "INVALID_CREDENTIALS" });
        }

        if (!passwordUtils.validate(password, user.password)) {
            throw new LoginError({ message: "invalid login credentials", name: "INVALID_CREDENTIALS" });
        }

        const token = jwtUtils.generateToken(user);

        return {
            user: {
                name: user.name,
                email: user.email
            }, token
        };
    },
};
