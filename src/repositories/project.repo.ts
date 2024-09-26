import db from "../database/database_con"
import Project from "../models/project.model";

export default {
    createProject: async (project: Project) => {
        await db.project.create({
            data: {
                name: project.name,
                roomID: project.roomID,
                managersID: project.managersID,
                membersID: project.membersID
            }
        });
    },
    getProjectByID: async (id: number) => {
        const project = await db.project.findFirst({
            where: {
                id
            }
        });
        return project;
    },
};
