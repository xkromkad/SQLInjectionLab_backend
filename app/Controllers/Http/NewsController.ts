// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { NewsRepositoryContract } from '@ioc:Repositories/NewsRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/OrganizationRepository'])
export default class NewsController {
  constructor(private newsRepository: NewsRepositoryContract) {}

  public async getOrganizations() {
    return await this.newsRepository.getNews()
  }
}
