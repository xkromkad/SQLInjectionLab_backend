import { DateTime } from 'luxon'
import { BaseModel, column, BelongsTo, belongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from 'App/Models/User'

export default class Pexeso extends BaseModel {
  public static table = 'pexeso'

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

  @belongsTo(() => User, {
    localKey: 'user_id',
    foreignKey: 'id',
  })
  public user: BelongsTo<typeof User>

  @column()
  public isShared: boolean

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
