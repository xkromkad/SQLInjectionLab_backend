import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/RehabilitationRepository'])
export default class DescriptionsController {
  constructor(private rehabilitationRepository: RehabilitationRepositoryContract) {}
  public async getTypes({ response }: HttpContextContract) {
    try {
      const types = await this.rehabilitationRepository.getDescriptionTypes()
      return types
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
  public async getCards({ response, params }: HttpContextContract) {
    try {
      const type = params.type
      const cards = await this.rehabilitationRepository.getDescriptionCards(type)
      return cards
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
}
