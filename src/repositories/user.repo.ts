import db from "../database/database_con"
import User from "../models/user.model";

export default {
    createUser: async (user: User) => {
        await db.user.create({
            data: {
                email: user.email,
                name: user.name,
                password: user.password
            }
        });
    },
    getUserByID: async (id: number) => {
        const user = await db.user.findFirst({
            where: {
                id
            }
        });
        return user;
    },
    getUserByEmail: async (email: string) => {
        const user = await db.user.findFirst({
            where: {
                email
            }
        });
        return user;
    }
};
