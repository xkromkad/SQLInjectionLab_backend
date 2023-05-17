import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import FindNumber from './FindNumber'

export default class FindNumbersUser extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public find_numbers_id: number

  @column()
  public user_id: number

  @belongsTo(() => User, {
    localKey: 'user_id',
    foreignKey: 'id',
  })
  public user: BelongsTo<typeof User>

  @belongsTo(() => FindNumber, {
    localKey: 'find_numbers_id',
    foreignKey: 'id',
  })
  public findNumber: BelongsTo<typeof FindNumber>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
