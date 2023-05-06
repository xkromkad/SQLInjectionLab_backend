import Organization from 'App/Models/Organization'
//import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import type { OrganizationRepositoryContract } from '@ioc:Repositories/OrganizationRepository'

export default class OrganizationRepository implements OrganizationRepositoryContract {
  public async getOrganizations(): Promise<Organization[]> {
    return await Organization.query().preload('address').exec()
  }
}
