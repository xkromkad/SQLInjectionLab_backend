import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import DescriptionType from './DescriptionType'

export default class Description extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public title: string

  @column()
  public image: string

  @column()
  public imageSource: string

  @column()
  public search: string

  @column()
  public see: string

  @column()
  public emotion: string

  @column()
  public fact: string

  @column()
  public imagine: string

  @column()
  public future: string

  @column()
  public story: string

  @column()
  public behaviour: string

  @column()
  public typeId: number

  @belongsTo(() => DescriptionType, {
    localKey: 'id',
    foreignKey: 'typeId',
  })
  public type: BelongsTo<typeof DescriptionType>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
