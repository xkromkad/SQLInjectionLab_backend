import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'
import { inject } from '@adonisjs/core/build/standalone'
import { DateTime } from 'luxon'

@inject(['Repositories/RehabilitationRepository'])
export default class FindNumbersController {
  constructor(private rehabilitationRepository: RehabilitationRepositoryContract) {}

  public async saveNumbers({ request, auth, response }: HttpContextContract) {
    const time: number = request.input('time')
    const date: DateTime = request.input('date')
    const size: number = request.input('size')
    const correctRate: number = request.input('correctCount')
    const missedtRate: number = request.input('wrongCount')
    try {
      const numbersStatistic = await this.rehabilitationRepository.saveNumbers(
        auth.user!,
        time,
        date,
        size,
        correctRate,
        missedtRate
      )
      return numbersStatistic
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }

  public async getStatistics({ auth, response }: HttpContextContract) {
    try {
      const numbersStatistic = await this.rehabilitationRepository.getNumbersStatistics(auth.user!)
      return numbersStatistic
    } catch (e) {
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
}
