import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class FindNumber extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public time: number

  @column()
  public size: number

  @column.dateTime()
  public date: DateTime

  @column()
  public user_id: number

  @column()
  public correctRate: number

  @column()
  public missedRate: number

  @belongsTo(() => User, {
    localKey: 'user_id',
    foreignKey: 'id',
  })
  public user: BelongsTo<typeof User>

  @column()
  public isShared: boolean

  @column()
  public likes: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
