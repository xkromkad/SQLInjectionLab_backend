import News from 'App/Models/News'
//import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import type { NewsRepositoryContract } from '@ioc:Repositories/NewsRepository'

export default class NewsRepository implements NewsRepositoryContract {
  public async getNews(): Promise<News[]> {
    return await News.all()
  }
}
