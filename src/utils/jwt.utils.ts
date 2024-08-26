import jwt from "jsonwebtoken";
import User from "../models/user.model";

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
