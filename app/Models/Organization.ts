import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import Address from './Address'

export default class Organization extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public addressId: number

  @belongsTo(() => Address, {
    localKey: 'id',
    foreignKey: 'addressId',
  })
  public address: BelongsTo<typeof Address>

  @column()
  public url: string

  @column()
  public image: string

  @column()
  public imageSource: string

  @column()
  public created_by: number

  @column()
  public updated_by: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
