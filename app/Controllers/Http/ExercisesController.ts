// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/RehabilitationRepository'])
export default class ExercisesController {
  constructor(private rehabilitationRepository: RehabilitationRepositoryContract) {}

  public async getExercises() {
    return await this.rehabilitationRepository.getExercises()
  }
}
