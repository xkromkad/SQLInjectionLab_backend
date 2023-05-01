import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import OrderingCardsType from './OrderingCardsType'

export default class OrderingCard extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public order: number

  @column()
  public image: string

  @column()
  public imageSource: string

  @column()
  public typeId: number

  @belongsTo(() => OrderingCardsType, {
    localKey: 'id',
    foreignKey: 'typeId',
  })
  public type: BelongsTo<typeof OrderingCardsType>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
