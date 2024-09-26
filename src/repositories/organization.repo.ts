import db from "../database/database_con"
import Organization from "../models/organization.model";

export default {
    createOrganization: async (organization: Organization) => {
        await db.organization.create({
            data: {
                name: organization.name,
                ownerID: organization.ownerID,
                adminsID: organization.adminsID,
                membersID: organization.membersID,
                projectsID: organization.projectsID
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
