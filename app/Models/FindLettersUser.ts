import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import FindLetter from './FindLetter'

export default class FindLettersUser extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public find_letters_id: number

  @column()
  public user_id: number

  @belongsTo(() => User, {
    localKey: 'user_id',
    foreignKey: 'id',
  })
  public user: BelongsTo<typeof User>

  @belongsTo(() => FindLetter, {
    localKey: 'find_letters_id',
    foreignKey: 'id',
  })
  public findLetter: BelongsTo<typeof FindLetter>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
