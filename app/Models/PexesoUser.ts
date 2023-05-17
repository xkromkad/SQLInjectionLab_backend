import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Pexeso from './Pexeso'

export default class PexesoUser extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public userId: number

  @column()
  public pexeso_id: number

  @belongsTo(() => User, {
    localKey: 'user_id',
    foreignKey: 'id',
  })
  public user: BelongsTo<typeof User>

  @belongsTo(() => Pexeso, {
    localKey: 'pexeso_id',
    foreignKey: 'id',
  })
  public pexeso: BelongsTo<typeof Pexeso>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
