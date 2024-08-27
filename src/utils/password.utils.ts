import bcrypt from "bcryptjs";
import env from "../env";

export default {
    encryptPass: (password: string) => {
        return bcrypt.hashSync(password, env.BCRYPT_ROUNDS);
    },
    validate: (password: string, hash: string) => {
        return bcrypt.compareSync(password, hash);
    }
};
