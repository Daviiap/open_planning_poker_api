import { Request, Response } from "express";
import { StatusCodes } from "http-status-codes"
import loginService from "../services/login.service";
import { LoginError } from "../errors/LoginError";


const handleLogin = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        const loginInfo = await loginService.login(email, password);

        return res.status(StatusCodes.OK).json(loginInfo);
    } catch (error) {
        if (error instanceof LoginError) {
            return res.status(StatusCodes.BAD_REQUEST).json({ error })
        }

        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
    }
};

export default { handleLogin };
