import { NextFunction, Request, Response } from 'express'
import { body, param, validationResult } from 'express-validator'
import { StatusCodes } from 'http-status-codes'
import userRepo from '../../../repositories/user.repo'
import { UserError } from '../../../errors/UserError'

export default [
  param('projectID').isInt(),
  body('name').notEmpty().isString().trim(),
  body('managersID')
    .custom(async managersList => {
      managersList.array.forEach(async (managerID: number) => {
        const manager = await userRepo.getUserByID(managerID)
        if (manager === null) {
          throw new UserError({
            message: 'manager not found',
            name: 'USER_NOT_FOUND_ERROR'
          })
        }
      })
    }),
  body('membersID')
    .custom(async managersList => {
      managersList.array.forEach(async (memberID: number) => {
        const member = await userRepo.getUserByID(memberID)
        if (member === null) {
          throw new UserError({
            message: 'member not found',
            name: 'USER_NOT_FOUND_ERROR'
          })
        }
      })
    }),
  (req: Request, res: Response, next: NextFunction) => {
    const result = validationResult(req)
    if (!result.isEmpty()) {
      return res
        .status(StatusCodes.BAD_REQUEST)
        .json({ errors: result.array() })
    }
    next()
  }
]
