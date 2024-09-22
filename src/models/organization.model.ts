import Project from "./project.model";
import User from "./user.model";

export default interface Organization {
    id: number,
    name: string,
    owner: User,
    admins: User[],
    members: User[],
    projects: Project[]
}