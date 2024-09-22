import { ProjectError } from '../errors/ProjectError'
import Project from '../models/project.model'
import Room from '../models/room.model'
import User from '../models/user.model'
import projectRepo from '../repositories/project.repo'

export default {
  getProject: async (projectID: number) => {
    const project = await projectRepo.getProjectByID(
      projectID
    )

    if (!project) {
      throw new ProjectError({
        name: 'PROJECT_NOT_FOUND_ERROR',
        message: `project ${projectID} not found`
      })
    }

    return { ...project }
  },

  createProject: async (
    name: string,
    room: Room,
    managers: User[],
    members: User[],
  ) => {
    await projectRepo.createProject({
      name,
      room,
      managers,
      members
    } as Project)
  }
}
