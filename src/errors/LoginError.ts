import { CustomError } from "./CustomError";

type ErrorName =
    | 'INVALID_CREDENTIALS'

export class LoginError extends CustomError<ErrorName> { };