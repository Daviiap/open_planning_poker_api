import db from "../database/database_con"
import Organization from "../models/organization.model";

export default {
    createOrganization: async (organization: Organization) => {
        await db.organization.create({
            data: {
                name: organization.name,
                owner: organization.owner,
                admins: organization.admins,
                members: organization.members,
                projects: organization.projects
            }
        });
    },
    getOrganizationByID: async (id: number) => {
        const organization = await db.organization.findFirst({
            where: {
                id
            }
        });
        return organization;
    },
};
