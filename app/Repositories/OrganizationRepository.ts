import Organization from 'App/Models/Organization'
import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import type { OrganizationRepositoryContract } from '@ioc:Repositories/OrganizationRepository'

export default class OrganizationRepository implements OrganizationRepositoryContract {
  public async findAll(
    page: number = 1,
    state: string,
    city: string,
    beforeDate: Date = new Date(),
    limit: number = 20
  ): Promise<ModelPaginatorContract<Organization>> {
    return await Organization.query()
      .andWhere('created_at', '<=', beforeDate)
      .orderBy('created_at', 'desc')
      .paginate(page, limit)
  }
}
