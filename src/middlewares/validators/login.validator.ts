import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import userRepo from '../../repositories/user.repo';

export default [
    body("email")
        .notEmpty()
        .isString()
        .trim()
        .isEmail(),
    body("password")
        .notEmpty()
        .isString()
        .trim()
        .isLength({ min: 8 }),
    (req: Request, res: Response, next: NextFunction) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json({ errors: result.array() });
        }
        next();
    },
];
