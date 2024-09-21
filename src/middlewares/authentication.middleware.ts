import { NextFunction, Request, Response } from "express";
import jwtUtils from "../utils/jwt.utils";
import { StatusCodes } from "http-status-codes";

export default (req: Request, res: Response, next: NextFunction) => {
    const { authorization: authHeader } = req.headers;

    if (!authHeader) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ error: "auth token not provided" })
    }

    try {
        const authData = jwtUtils.validate(authHeader);
        res.locals.authData = authData;
    } catch (error) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ error: "invalid token" })
    }

    next();
}
