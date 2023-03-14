import RehabilitationCategory from 'App/Models/RehabilitationCategory'
import type { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'

export default class RehabilitationRepository implements RehabilitationRepositoryContract {
  public async getRehabilitationCategories(): Promise<RehabilitationCategory[]> {
    return await RehabilitationCategory.all()
  }
}
