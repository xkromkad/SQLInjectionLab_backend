//import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import type { CommunityRepositoryContract } from '@ioc:Repositories/CommunityRepository'
import Database from '@ioc:Adonis/Lucid/Database'
import { Post } from 'Contracts/community'

export default class CommunityRepository implements CommunityRepositoryContract {
  public async getPosts(page: number): Promise<Post[]> {
    const limit = 10

    const posts = await Database.from('pexeso')
      .select(
        'pexeso.id',
        'pexeso.time',
        'pexeso.size',
        'pexeso.date',
        'users.id',
        'users.firstname',
        'users.surname',
        Database.raw(`'pexeso' as mark`)
      )
      .leftJoin('users', 'users.id', '=', 'pexeso.user_id')
      .where('is_shared', true)
      .union((query) => {
        query
          .from('find_letters')
          .select(
            'find_letters.id',
            'find_letters.time',
            'find_letters.size',
            'find_letters.date',
            'users.id',
            'users.firstname',
            'users.surname',
            Database.raw(`'find_letters' as mark`)
          )
          .leftJoin('users', 'users.id', '=', 'find_letters.user_id')
          .where('is_shared', true)
      })
      .union((query) => {
        query
          .from('find_numbers')
          .select(
            'find_numbers.id',
            'find_numbers.time',
            'find_numbers.size',
            'find_numbers.date',
            'users.id',
            'users.firstname',
            'users.surname',
            Database.raw(`'find_numbers' as mark`)
          )
          .leftJoin('users', 'users.id', '=', 'find_numbers.user_id')
          .where('is_shared', true)
      })
      .paginate(page, limit)

    return await posts.all()
  }

  public async getPageCount(): Promise<number> {
    return 0
  }
}
