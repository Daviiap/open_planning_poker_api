import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { OrganizationError } from '../errors/OrganizationError'
import organizationService from '../services/organization.service'

const handleGet = async (req: Request, res: Response) => {
  try {
    const { organizationID } = req.params

    const organization = await organizationService.getOrganization(
      parseInt(organizationID)
    )

    return res.status(StatusCodes.OK).json({ organization })
  } catch (error) {
    if (error instanceof OrganizationError) {
      return res.status(StatusCodes.NOT_FOUND).json(error)
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
  }
}

const handleCreate = async (req: Request, res: Response) => {
  try {
    const { name, ownerID, adminsID, membersID, projectsID } = req.body

    await organizationService.createOrganization(
      name,
      ownerID,
      adminsID,
      membersID,
      projectsID
    )

    return res.status(StatusCodes.CREATED).send()
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
  }
}

export default { handleGet, handleCreate }
