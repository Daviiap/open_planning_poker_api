import { NextFunction, Request, Response } from 'express'
import { body, param, validationResult } from 'express-validator'
import { StatusCodes } from 'http-status-codes'
import userRepo from '../../../repositories/user.repo'
import { UserError } from '../../../errors/UserError'

export default [
  param('organizationID').isInt(),
  body('name').notEmpty().isString().trim(),
  body('ownerID')
    .isInt()
    .custom(async ownerID => {
      const owner = await userRepo.getUserByID(ownerID)
      if (owner === null) {
        throw new UserError({
          message: 'owner not found',
          name: 'USER_NOT_FOUND_ERROR'
        })
      }
    }),
  body('adminsID').custom(async adminsList => {
    adminsList.array.forEach(async (adminID: number) => {
      const admin = await userRepo.getUserByID(adminID)
      if (admin === null) {
        throw new UserError({
          message: 'admin not found',
          name: 'USER_NOT_FOUND_ERROR'
        })
      }
    })
  }),
  body('membersID').custom(async managersList => {
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
