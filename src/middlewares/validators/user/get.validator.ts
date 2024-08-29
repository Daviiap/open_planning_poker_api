import { NextFunction, Request, Response } from 'express';
import { header, param, validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';

export default [
    param("userID").isInt(),
    (req: Request, res: Response, next: NextFunction) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json({ errors: result.array() });
        }
        next();
    },
];
