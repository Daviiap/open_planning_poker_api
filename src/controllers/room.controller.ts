import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import roomService from '../services/room.service'
import { RoomError } from '../errors/RoomError'

const handleGet = async (req: Request, res: Response) => {
  try {
    const { roomID } = req.params

    const room = await roomService.getRoom(
      parseInt(roomID)
    )

    return res.status(StatusCodes.OK).json({ room })
  } catch (error) {
    if (error instanceof RoomError) {
      return res.status(StatusCodes.NOT_FOUND).json(error)
    }
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
  }
}

const handleCreate = async (req: Request, res: Response) => {
  try {
    await roomService.createRoom()

    return res.status(StatusCodes.CREATED).send()
  } catch (error) {
    return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error })
  }
}

export default { handleGet, handleCreate }
