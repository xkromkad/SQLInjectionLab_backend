// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CommunityRepositoryContract } from '@ioc:Repositories/CommunityRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/CommunityRepository'])
export default class CommunityController {
  constructor(private communityRepository: CommunityRepositoryContract) {}

  public async getPosts({ response, params }: HttpContextContract) {
    console.log(params.page)
    try {
      const page: number = params.page
      const posts = await this.communityRepository.getPosts(page)
      return posts
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
}
