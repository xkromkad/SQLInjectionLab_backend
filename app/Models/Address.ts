import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Address extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public country: string

  @column()
  public city: string

  @column()
  public street: string

  @column()
  public number: string

  @column()
  public postal_code: string

  @column()
  public created_by: number

  @column()
  public updated_by: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
