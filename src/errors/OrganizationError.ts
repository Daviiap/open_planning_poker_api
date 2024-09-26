import { CustomError } from "./CustomError";

type OrganizationName =
    | 'ORGANIZATION_NOT_FOUND_ERROR'
    | 'ORGANIZATION_ALREADY_EXIST_ERROR'

export class OrganizationError extends CustomError<OrganizationName> { };
