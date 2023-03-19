import RehabilitationCategory from 'App/Models/RehabilitationCategory'
import Exercise from 'App/Models/Exercise'
import type { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'

export default class RehabilitationRepository implements RehabilitationRepositoryContract {
  public async getRehabilitationCategories(): Promise<RehabilitationCategory[]> {
    return await RehabilitationCategory.all()
  }
  public async getExercises(): Promise<Exercise[]> {
    const exercises = await Exercise.query()
      .select(
        'exercises.id',
        'exercises.name',
        'exercises.mark',
        'exercises.description',
        'devices.device_type',
        'rehabilitation_categories.name as rehabilitation_category_name'
      )
      .leftJoin('exercises_devices', 'exercises.id', 'exercises_devices.id_exercise')
      .leftJoin('devices', 'exercises_devices.id_device', 'devices.id')
      .leftJoin(
        'exercises_rehabilitation_categories',
        'exercises.id',
        'exercises_rehabilitation_categories.id_exercise'
      )
      .leftJoin(
        'rehabilitation_categories',
        'exercises_rehabilitation_categories.id_rehabilitation_category',
        'rehabilitation_categories.id'
      )
      .orderBy('exercises.id', 'asc')
    return exercises
  }
}
