import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Device extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public device_type: string

  @column()
  public icon: string

  @column()
  public screensize_from: number

  @column()
  public screensize_to: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
