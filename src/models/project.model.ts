import Room from "./room.model";
import User from "./user.model";

export default interface Project {
    id: number,
    name: string,
    room: Room,
    managers: User[],
    members: User[]
}