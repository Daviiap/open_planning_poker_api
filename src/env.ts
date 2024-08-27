import * as dotenv from "dotenv";

dotenv.config();

export default {
    API_PORT: parseInt(process.env.PORT as string, 10),
    BCRYPT_ROUNDS: parseInt(process.env.BCRYPT_ROUNDS as string, 10),
    DATABASE_URL: process.env.DATABASE_URL as string,
    JWT_PASS: process.env.JWT_PASS as string,
};