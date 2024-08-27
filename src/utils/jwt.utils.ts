import { User } from "@prisma/client";
import jwt from "jsonwebtoken";

export default {
    generateToken: (user: User) => {
        const token = jwt.sign(
            user,
            process.env.JWT_PASS as string,
            {
                expiresIn: "1h"
            });
        return token;
    }
};
