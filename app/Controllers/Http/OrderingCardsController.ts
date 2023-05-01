import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/RehabilitationRepository'])
export default class OrderingCardsController {
  constructor(private rehabilitationRepository: RehabilitationRepositoryContract) {}
  public async getTypes({ response }: HttpContextContract) {
    try {
      const types = await this.rehabilitationRepository.getOrderingTypes()
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
      const type: string = params.type
      const cards = await this.rehabilitationRepository.getOrderingCards(type)
      return cards
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
}
