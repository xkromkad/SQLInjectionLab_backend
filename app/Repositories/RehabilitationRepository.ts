import RehabilitationCategory from 'App/Models/RehabilitationCategory'
import Exercise from 'App/Models/Exercise'
import User from 'App/Models/User'
import Pexeso from 'App/Models/Pexeso'
import type { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'
import { DateTime } from 'luxon'

export default class RehabilitationRepository implements RehabilitationRepositoryContract {
  public async getRehabilitationCategories(): Promise<RehabilitationCategory[]> {
    return await RehabilitationCategory.all()
  }

  public async getExercises(): Promise<Exercise[]> {
    const exercises = await Exercise.query()
      .preload('devices', (query) => {
        query.pivotColumns(['level'])
      })
      .preload('rehabilitationCategories')
      .exec()
    return exercises
  }

  public async getUserExercises(user: User): Promise<number[]> {
    const exerciseIds = await user.related('exercises').query().select('id')
    return exerciseIds.map((exercise) => exercise.id)
  }

  public async saveUserExercise(user: User, idExercise: number): Promise<Exercise> {
    const exercise = await Exercise.findOrFail(idExercise)
    await user.related('exercises').attach([exercise.id])
    return exercise
  }

  public async removeUserExercise(user: User, idExercise: number): Promise<void> {
    const exercise = await Exercise.findOrFail(idExercise)
    await user.related('exercises').detach([exercise.id])
  }

  public async savePexeso(user: User, time: number, date: DateTime, size: number): Promise<void> {
    const pexeso = new Pexeso()

    pexeso.time = time
    pexeso.date = date
    pexeso.size = size
    pexeso.user_id = user.id

    await pexeso.save()
  }
}
