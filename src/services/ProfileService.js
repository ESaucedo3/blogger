import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Account } from "@/models/Account.js"
import { AppState } from "@/AppState.js"

class ProfilesService {

  async findUserById(userId) {
    AppState.activeAccount = null
    const response = await api.get(`api/profiles/${userId}`)
    logger.log(`got user with Id`, response.data)
    const newUser = new Account(response.data)
    AppState.activeAccount = newUser
  }
}

export const profilesService = new ProfilesService()