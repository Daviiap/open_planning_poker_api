import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes"
import userService from "../services/user.service";
import { UserError } from "../errors/UserError";

const handleGet = async (req: Request, res: Response) => {
    try {
        const { userID } = req.params;

        const user = await userService.getUser(parseInt(userID));

        return res.status(StatusCodes.OK).json({ user });
    } catch (error) {
        if (error instanceof UserError) {
            return res.status(StatusCodes.NOT_FOUND).json(error);
        }
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
};

export default { handleGet };
