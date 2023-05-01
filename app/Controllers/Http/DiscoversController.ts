import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { DiscoverRepositoryContract } from '@ioc:Repositories/DiscoverRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/DiscoverRepository'])
export default class DiscoversController {
  constructor(private discoverRepository: DiscoverRepositoryContract) {}
  public async getArticles({ response }: HttpContextContract) {
    try {
      const articles = await this.discoverRepository.getArticles()
      return articles
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
}
