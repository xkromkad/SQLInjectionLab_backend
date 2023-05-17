// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { CommunityRepositoryContract } from '@ioc:Repositories/CommunityRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/CommunityRepository'])
export default class CommunityController {
  constructor(private communityRepository: CommunityRepositoryContract) {}

  public async getPosts({ response, params, auth }: HttpContextContract) {
    try {
      const page: number = params.page
      const posts = await this.communityRepository.getPosts(page, auth.user!)
      return posts
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }

  public async getPageCount({ response }: HttpContextContract) {
    try {
      const posts = await this.communityRepository.getPageCount()
      return posts
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }

  public async likePost({ request, response, auth }: HttpContextContract) {
    const id: number = request.input('id')
    const liked: boolean = request.input('liked')
    const mark: string = request.input('mark')
    try {
      const post = await this.communityRepository.likePost(id, liked, mark, auth.user!)
      return post
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
}
