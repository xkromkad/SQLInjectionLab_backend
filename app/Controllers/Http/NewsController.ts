// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { NewsRepositoryContract } from '@ioc:Repositories/NewsRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/NewsRepository'])
export default class NewsController {
  constructor(private newsRepository: NewsRepositoryContract) {}

  public async getNews() {
    return await this.newsRepository.getNews()
  }
}
