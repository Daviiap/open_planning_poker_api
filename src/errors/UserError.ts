import { CustomError } from "./CustomError";

type ErrorName =
    | 'USER_NOT_FOUND_ERROR'
    | 'USER_ALREADY_EXIST_ERROR'

export class UserError extends CustomError<ErrorName> { };
