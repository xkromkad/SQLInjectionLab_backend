// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'
import { inject } from '@adonisjs/core/build/standalone'

@inject(['Repositories/RehabilitationRepository'])
export default class RehabilitationCategoriesController {
  constructor(private rehabilitationRepository: RehabilitationRepositoryContract) {}

  public async getCategories() {
    return await this.rehabilitationRepository.getRehabilitationCategories()
  }
}
