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
    owner: User,
    admins: User[],
    members: User[],
    projects: Project[]
  ) => {
    await organizationRepo.createOrganization({
      name,
      owner,
      admins,
      members,
      projects
    } as Organization)
  }
}
