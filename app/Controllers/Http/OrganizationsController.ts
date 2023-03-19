// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { OrganizationRepositoryContract } from '@ioc:Repositories/OrganizationRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/OrganizationRepository'])
export default class OrganizationsController {
  constructor(private organizationRepository: OrganizationRepositoryContract) {}

  public async getOrganizations() {
    return await this.organizationRepository.getOrganizations()
  }
}
