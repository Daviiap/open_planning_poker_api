import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';
import { StatusCodes } from 'http-status-codes';
import userRepo from '../../repositories/user.repo';

export default [
    body("email")
        .notEmpty()
        .isString()
        .trim()
        .isEmail()
        .custom(async value => {
            const user = await userRepo.getUserByEmail(value);
            if(user !== null) {
                throw new Error("user already exist");
            }
        }),
    body("name")
        .notEmpty()
        .isString()
        .trim(),
    body("password")
        .notEmpty()
        .isString()
        .trim()
        .isLength({ min: 8 }),
    body("passwordConfirmation")
        .notEmpty()
        .isString()
        .trim()
        .isLength({ min: 8 })
        .custom((value, { req }) => value == req.body.password),
    (req: Request, res: Response, next: NextFunction) => {
        const result = validationResult(req);
        if (!result.isEmpty()) {
            return res.status(StatusCodes.BAD_REQUEST).json({ errors: result.array() });
        }
        next();
    },
];
