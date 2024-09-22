import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import { ProjectError } from '../errors/ProjectError'
import projectService from '../services/project.service'

const handleGet = async (req: Request, res: Response) => {
  try {
    const { projectID } = req.params

    const project = await projectService.getProject(
      parseInt(projectID)
    )

    return res.status(StatusCodes.OK).json({ project })
  } catch (error) {
    if (error instanceof ProjectError) {
      return res.status(StatusCodes.NOT_FOUND).json(error)
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
  }
}

const handleCreate = async (req: Request, res: Response) => {
  try {
    const { name, room, managers, participants } = req.body

    await projectService.createProject(
      name,
      room,
      managers,
      participants
    )

    return res.status(StatusCodes.CREATED).send()
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
  }
}

export default { handleGet, handleCreate }
