// here we are declaring our OrganizationRepository types for Repositories/MessageRepository
// container binding. See providers/AppProvider.ts for how we are binding the implementation
declare module '@ioc:Repositories/OrganizationRepository' {
  import { LucidModel, ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
  import Organization from 'App/Models/Organization'

  export interface SerializedMessage {
    createdBy: number
    content: string
    channelId: number
    createdAt: string
    updatedAt: string
    id: number
    author: {
      id: number
      email: string
      createdAt: string
      updatedAt: string
    }
  }

  export interface OrganizationRepositoryContract {
    findAll(
      page: number,
      state: string,
      city: string,
      beforeDate?: Date,
      limit?: number
    ): Promise<ModelPaginatorContract<Organization>>
  }

  export const OrganizationRepository: OrganizationRepositoryContract
}

declare module '@ioc:Repositories/RehabilitationRepository' {
  import { LucidModel, ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
  import RehabilitationCategory from 'App/Models/RehabilitationCategory'

  export interface RehabilitationRepositoryContract {
    getRehabilitationCategories(): Promise<RehabilitationCategory[]>
  }

  export const RehabilitationRepository: RehabilitationRepositoryContract
}
