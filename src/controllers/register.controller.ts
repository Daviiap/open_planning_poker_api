import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes"

const handleRegister = async (req: Request, res: Response) => {
    try {
        return res.status(StatusCodes.ACCEPTED).json();
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
};

export default { handleRegister };
