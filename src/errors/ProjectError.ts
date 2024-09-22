import { CustomError } from "./CustomError";

type ProjectName =
    | 'PROJECT_NOT_FOUND_ERROR'
    | 'PROJECT_ALREADY_EXIST_ERROR'

export class ProjectError extends CustomError<ProjectName> { };
