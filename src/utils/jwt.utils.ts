import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import env from "../env";

export default {
    generateToken: (user: User) => {
        const token = jwt.sign(
            {
                ...user,
                password: undefined
            },
            env.JWT_PASS,
            {
                expiresIn: "1h"
            });
        return token;
    },
    validate: (token: string) => {
        const result = jwt.verify(token, env.JWT_PASS);
        return result;
    }
};
