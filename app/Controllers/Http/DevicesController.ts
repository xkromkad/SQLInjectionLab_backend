import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/RehabilitationRepository'])
export default class DevicesController {
  constructor(private rehabilitationRepository: RehabilitationRepositoryContract) {}
  public async getDevices({ response }: HttpContextContract) {
    try {
      const devices = await this.rehabilitationRepository.getDevices()
      return devices
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
}
