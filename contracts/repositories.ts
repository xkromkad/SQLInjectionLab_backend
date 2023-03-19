// here we are declaring our OrganizationRepository types for Repositories/OrganizationRepository
// container binding. See providers/AppProvider.ts for how we are binding the implementation
declare module '@ioc:Repositories/OrganizationRepository' {
  import { LucidModel, ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
  import Organization from 'App/Models/Organization'

  export interface OrganizationRepositoryContract {
    getOrganizations(): Promise<Organization[]>
  }

  export const OrganizationRepository: OrganizationRepositoryContract
}

// here we are declaring our OrganizationRepository types for Repositories/RehabilitationRepository
// container binding. See providers/AppProvider.ts for how we are binding the implementation
declare module '@ioc:Repositories/RehabilitationRepository' {
  import { LucidModel, ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
  import RehabilitationCategory from 'App/Models/RehabilitationCategory'
  import Exercise from 'App/Models/Exercise'

  export interface RehabilitationRepositoryContract {
    getRehabilitationCategories(): Promise<RehabilitationCategory[]>
    getExercises(): Promise<Exercise[]>
  }

  export const RehabilitationRepository: RehabilitationRepositoryContract
}
