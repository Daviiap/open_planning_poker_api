import { CustomError } from "./CustomError";

type RoomName =
    | 'ROOM_NOT_FOUND_ERROR'
    | 'ROOM_ALREADY_EXIST_ERROR'

export class RoomError extends CustomError<RoomName> { };
