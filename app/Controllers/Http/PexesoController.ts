import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'
import { inject } from '@adonisjs/core/build/standalone'
import { DateTime } from 'luxon'

@inject(['Repositories/RehabilitationRepository'])
export default class PexesoController {
  constructor(private rehabilitationRepository: RehabilitationRepositoryContract) {}

  public async savePexeso({ request, auth, response }: HttpContextContract) {
    const time: number = request.input('time')
    const date: DateTime = request.input('date')
    const size: number = request.input('size')
    try {
      const pexesoStatistic = await this.rehabilitationRepository.savePexeso(
        auth.user!,
        time,
        date,
        size
      )
      return pexesoStatistic
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
}
