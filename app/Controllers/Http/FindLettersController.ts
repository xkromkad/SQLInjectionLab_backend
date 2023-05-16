import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'
import { inject } from '@adonisjs/core/build/standalone'
import { DateTime } from 'luxon'

@inject(['Repositories/RehabilitationRepository'])
export default class FindLettersController {
  constructor(private rehabilitationRepository: RehabilitationRepositoryContract) {}

  public async saveLetters({ request, auth, response }: HttpContextContract) {
    const time: number = request.input('time')
    const date: DateTime = request.input('date')
    const size: number = request.input('size')
    const correctRate: number = request.input('correctCount')
    const missedtRate: number = request.input('wrongCount')
    try {
      const lettersStatistic = await this.rehabilitationRepository.saveLetters(
        auth.user!,
        time,
        date,
        size,
        correctRate,
        missedtRate
      )
      return lettersStatistic
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }

  public async shareLetters({ request, response }: HttpContextContract) {
    const gameId: number = request.input('gameId')
    try {
      const letters = await this.rehabilitationRepository.shareLetters(gameId)
      return letters
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }

  public async getStatistics({ auth, response }: HttpContextContract) {
    try {
      const letterStatistic = await this.rehabilitationRepository.getLettersStatistics(auth.user!)
      return letterStatistic
    } catch (e) {
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
}
