import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes"
import registerService from "../services/register.service";

const handleRegister = async (req: Request, res: Response) => {
    try {
        const { email, name, password } = req.body;

        await registerService.register(name, email, password);

        return res.status(StatusCodes.CREATED).send();
    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
};

export default { handleRegister };
