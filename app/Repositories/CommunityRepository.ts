//import { ModelPaginatorContract } from '@ioc:Adonis/Lucid/Orm'
import type { CommunityRepositoryContract } from '@ioc:Repositories/CommunityRepository'
import Database from '@ioc:Adonis/Lucid/Database'
import { Post } from 'Contracts/community'
import Pexeso from 'App/Models/Pexeso'
import FindNumber from 'App/Models/FindNumber'
import FindLetter from 'App/Models/FindLetter'
import User from 'App/Models/User'
import PexesoUser from 'App/Models/PexesoUser'
import FindNumberUser from 'App/Models/FindNumbersUser'
import FindLetterUser from 'App/Models/FindLettersUser'

export default class CommunityRepository implements CommunityRepositoryContract {
  public async getPosts(page: number, user: User): Promise<Post[]> {
    const limit = 10

    const userId = user.id.toString() // Assuming user.id is accessible and valid

    const posts = await Database.from('pexeso')
      .select(
        'pexeso.id',
        'pexeso.time',
        'pexeso.size',
        'pexeso.likes',
        'pexeso.created_at',
        'users.id as user_id',
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
            'find_letters.likes',
            'find_letters.created_at',
            'users.id as user_id',
            'users.firstname',
            'users.surname',
            Database.raw(`'findLetters' as mark`)
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
            'find_numbers.likes',
            'find_numbers.created_at',
            'users.id as user_id',
            'users.firstname',
            'users.surname',
            Database.raw(`'findNumbers' as mark`)
          )
          .leftJoin('users', 'users.id', '=', 'find_numbers.user_id')
          .where('is_shared', true)
      })
      .paginate(page, limit)
    const result = await posts.all()
    for (const post of result) {
      let like: any = null
      if (post.mark === 'pexeso') {
        like = await PexesoUser.query().where('user_id', userId).where('pexeso_id', post.id).first()
      }
      if (post.mark === 'findNumbers') {
        like = await FindNumberUser.query()
          .where('user_id', userId)
          .where('find_numbers_id', post.id)
          .first()
      }
      if (post.mark === 'findLetters') {
        like = await FindLetterUser.query()
          .where('user_id', userId)
          .where('find_letters_id', post.id)
          .first()
      }
      if (like) {
        post.liked = true
      } else {
        post.liked = false
      }
    }
    return await result
  }

  public async getPageCount(): Promise<number> {
    const posts = await Database.from('pexeso')
      .select('pexeso.id')
      .leftJoin('users', 'users.id', '=', 'pexeso.user_id')
      .where('is_shared', true)
      .union((query) => {
        query
          .from('find_letters')
          .select('find_letters.id')
          .leftJoin('users', 'users.id', '=', 'find_letters.user_id')
          .where('is_shared', true)
      })
      .union((query) => {
        query
          .from('find_numbers')
          .select('find_numbers.id')
          .leftJoin('users', 'users.id', '=', 'find_numbers.user_id')
          .where('is_shared', true)
      })
    return await posts.length
  }

  public async likePost(id: number, liked: boolean, mark: string, user: User): Promise<void> {
    let post: any = null
    let existingLike: any = null
    switch (mark) {
      case 'pexeso':
        post = await Pexeso.find(id)
        existingLike = await PexesoUser.query()
          .where('user_id', user.id)
          .where('pexeso_id', id)
          .first()

        if (!existingLike && liked) {
          post.likes++
          post.save()
          const like = new PexesoUser()
          like.pexeso_id = id
          like.user_id = user.id
          like.save()
        } else if (!liked && existingLike) {
          existingLike.delete()
          post.likes--
          post.save()
        }
        break
      case 'findNumbers':
        post = await FindNumber.find(id)
        existingLike = await FindNumberUser.query()
          .where('user_id', user.id)
          .where('find_numbers_id', id)
          .first()

        if (!existingLike && liked) {
          post.likes++
          post.save()
          const like = new FindNumberUser()
          like.find_numbers_id = id
          like.user_id = user.id
          like.save()
        } else if (!liked && existingLike) {
          existingLike.delete()
          post.likes--
          post.save()
        }
        break
      case 'findLetters':
        post = await FindLetter.find(id)
        existingLike = await FindLetterUser.query()
          .where('user_id', user.id)
          .where('find_letters_id', id)
          .first()

        if (!existingLike && liked) {
          post.likes++
          post.save()
          const like = new FindLetterUser()
          like.find_letters_id = id
          like.user_id = user.id
          like.save()
        } else if (!liked && existingLike) {
          existingLike.delete()
          post.likes--
          post.save()
        }
        break
      default:
        throw new Error('Invalid mark')
    }
  }
}
