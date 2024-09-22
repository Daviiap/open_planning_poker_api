import db from "../database/database_con"
import Project from "../models/project.model";

export default {
    createProject: async (project: Project) => {
        await db.project.create({
            data: {
                name: project.name,
                room: project.room,
                managers: project.managers,
                members: project.members
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
