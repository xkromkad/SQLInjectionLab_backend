// here we are declaring our DiscoverRepository types for Repositories/DiscoveerRepository
// container binding. See providers/AppProvider.ts for how we are binding the implementation
declare module '@ioc:Repositories/DiscoverRepository' {
  import { LucidModel, ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
  import Discover from 'App/Models/Discover'

  export interface DiscoverRepositoryContract {
    getArticles(): Promise<Discover[]>
  }

  export const DiscoverRepository: DiscoverRepositoryContract
}

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
  import Device from 'App/Models/Device'
  import User from 'App/Models/User'
  import Pexeso from 'App/Models/Pexeso'
  import DescriptionType from 'App/Models/DescriptionType'
  import Description from 'App/Models/Description'
  import OrderingCardsType from 'App/Models/OrderingCardsType'
  import OrderingCard from 'App/Models/OrderingCard'
  import { DateTime } from 'luxon'

  export interface RehabilitationRepositoryContract {
    getRehabilitationCategories(): Promise<RehabilitationCategory[]>
    getExercises(): Promise<Exercise[]>
    getUserExercises(user: User): Promise<number[]>
    saveUserExercise(user: User, idExercise: number): Promise<Exercise>
    removeUserExercise(user: User, idExercise: number): Promise<void>
    savePexeso(user: User, time: number, date: DateTime, size: number): Promise<void>
    saveLetters(
      user: User,
      time: number,
      date: DateTime,
      size: number,
      correctRate: number,
      missedtRate: number
    ): Promise<void>
    saveNumbers(
      user: User,
      time: number,
      date: DateTime,
      size: number,
      correctRate: number,
      missedtRate: number
    ): Promise<void>
    getStatistics(user: User): Promise<Pexeso[]>
    getNumbersStatistics(user: User): Promise<Pexeso[]>
    getLettersStatistics(user: User): Promise<Pexeso[]>
    getDevices(): Promise<Device[]>
    getDescriptionTypes(): Promise<DescriptionType[]>
    getDescriptionCards(type: string): Promise<Description[]>
    getOrderingTypes(): Promise<OrderingCardsType[]>
    getOrderingCards(type: string): Promise<OrderingCard[]>
  }

  export const RehabilitationRepository: RehabilitationRepositoryContract
}

// here we are declaring our OrganizationRepository types for Repositories/NewsRepository
// container binding. See providers/AppProvider.ts for how we are binding the implementation
declare module '@ioc:Repositories/NewsRepository' {
  import News from 'App/Models/News'

  export interface NewsRepositoryContract {
    getNews(): Promise<News[]>
  }

  export const NewsRepository: NewsRepositoryContract
}
