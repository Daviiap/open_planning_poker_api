import bcrypt from "bcryptjs";

export default {
    encryptPass: (password: string) => {
        return bcrypt.hashSync(password, parseInt(process.env.BCRYPT_ROUNDS as string, 10));
    }
};
