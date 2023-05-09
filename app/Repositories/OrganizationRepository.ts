import Organization from 'App/Models/Organization'
//import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import type { OrganizationRepositoryContract } from '@ioc:Repositories/OrganizationRepository'
import User from 'App/Models/User'
import OrganizationsComment from 'App/Models/OrganizationsComment'

export default class OrganizationRepository implements OrganizationRepositoryContract {
  public async getOrganizations(): Promise<Organization[]> {
    return await Organization.query().preload('address').preload('comments').exec()
  }

  public async sendComment(user: User, id: number, comment: string): Promise<void> {
    const orgComment = new OrganizationsComment()

    orgComment.organizationId = id
    orgComment.comment = comment
    orgComment.userId = user.id

    await orgComment.save()
  }
}
