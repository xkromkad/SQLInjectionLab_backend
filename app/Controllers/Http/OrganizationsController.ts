import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { OrganizationRepositoryContract } from '@ioc:Repositories/OrganizationRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/OrganizationRepository'])
export default class OrganizationsController {
  constructor(private organizationRepository: OrganizationRepositoryContract) {}

  public async getOrganizations() {
    console.log('hello')
    return await this.organizationRepository.getOrganizations()
  }

  public async sendComment({ request, auth, response }: HttpContextContract) {
    const id: number = request.input('id')
    const comment: string = request.input('comment')
    try {
      const savedComment = await this.organizationRepository.sendComment(auth.user!, id, comment)
      return savedComment
    } catch (e) {
      console.log(e)
      return response.status(200).send({
        msg: e.message,
      })
    }
  }
}
