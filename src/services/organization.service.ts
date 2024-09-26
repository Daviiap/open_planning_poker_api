import { OrganizationError } from '../errors/OrganizationError'
import Organization from '../models/organization.model'
import Project from '../models/project.model'
import User from '../models/user.model'
import organizationRepo from '../repositories/organization.repo'

export default {
  getOrganization: async (organizationID: number) => {
    const organization = await organizationRepo.getOrganizationByID(
      organizationID
    )

    if (!organization) {
      throw new OrganizationError({
        name: 'ORGANIZATION_NOT_FOUND_ERROR',
        message: `organization ${organizationID} not found`
      })
    }

    return { ...organization }
  },

  createOrganization: async (
    name: string,
    ownerID: number,
    adminsID: number[],
    membersID: number[],
    projectsID: number[]
  ) => {
    await organizationRepo.createOrganization({
      name,
      ownerID,
      adminsID,
      membersID,
      projectsID
    } as Organization)
  }
}
