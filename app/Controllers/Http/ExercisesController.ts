import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/RehabilitationRepository'])
export default class ExercisesController {
  constructor(private rehabilitationRepository: RehabilitationRepositoryContract) {}

  public async getExercises() {
    return await this.rehabilitationRepository.getExercises()
  }

  public async getSavedExercises() {
    console.log('ziskaj ulozene exercises')
  }

  public async saveUserExercise({ request, auth, response }: HttpContextContract) {
    const idExercise: number = request.input('id')
    try {
      const exercise = await this.rehabilitationRepository.saveUserExercise(auth.user!, idExercise)
      return exercise
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
}
