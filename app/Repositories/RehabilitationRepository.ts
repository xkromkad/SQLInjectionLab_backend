import RehabilitationCategory from 'App/Models/RehabilitationCategory'
import Exercise from 'App/Models/Exercise'
import type { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'

export default class RehabilitationRepository implements RehabilitationRepositoryContract {
  public async getRehabilitationCategories(): Promise<RehabilitationCategory[]> {
    return await RehabilitationCategory.all()
  }
  public async getExercises(): Promise<Exercise[]> {
    return await Exercise.all()
  }
}
