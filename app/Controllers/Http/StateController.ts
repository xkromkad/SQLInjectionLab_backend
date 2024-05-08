import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { StateRepositoryContract } from '@ioc:Repositories/StateRepository'
import { inject } from '@adonisjs/core/build/standalone'
import { DateTime } from 'luxon'

@inject(['Repositories/StateRepository'])
export default class StateController {
  constructor(private stateRepository: StateRepositoryContract) {}

  public async saveState({ request, auth, response }: HttpContextContract) {
    console.log('ukladam')
    const state: string = request.input('state')
    try {
      const stateSaved = await this.stateRepository.saveState(auth.user!, state)
      return stateSaved
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }

  public async getState({ auth, response }: HttpContextContract) {
    console.log('posielam')
    try {
      const stateResult = await this.stateRepository.getState(auth.user!)
      return stateResult
    } catch (e) {
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
}
