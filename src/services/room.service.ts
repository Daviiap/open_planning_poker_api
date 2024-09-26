import { RoomError } from '../errors/RoomError'
import Room from '../models/room.model'
import roomRepo from '../repositories/room.repo'

export default {
  getRoom: async (roomID: number) => {
    const room = await roomRepo.getRoomByID(
      roomID
    )

    if (!room) {
      throw new RoomError({
        name: 'ROOM_NOT_FOUND_ERROR',
        message: `room ${roomID} not found`
      })
    }

    return { ...room }
  },

  createRoom: async () => {
    await roomRepo.createRoom({} as Room)
  }
}
