import Discover from 'App/Models/Discover'
//import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import type { DiscoverRepositoryContract } from '@ioc:Repositories/DiscoverRepository'

export default class DiscoverRepository implements DiscoverRepositoryContract {
  public async getArticles(): Promise<Discover[]> {
    return await Discover.all()
  }

  public async getArticle(id: number): Promise<Discover> {
    return await Discover.findOrFail(id)
  }
}
