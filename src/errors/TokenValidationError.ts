import { CustomError } from "./CustomError";

type ErrorName =
    | 'INVALID_TYPE'

export class TokenValidationError extends CustomError<ErrorName> { };