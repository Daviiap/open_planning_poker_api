import { User } from "@prisma/client";
import jwt from "jsonwebtoken";
import env from "../env";
import { TokenValidationError } from "../errors/TokenValidationError";

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
    validate: (authToken: string) => {
        const [type, token] = authToken.split(" ")

        if (type !== "Bearer") {
            throw new TokenValidationError({ name: "INVALID_TYPE", message: `expected Bearer token, but got ${type}` });
        }

        const result = jwt.verify(token, env.JWT_PASS);
        return result;
    }
};
