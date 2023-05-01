import { DateTime } from 'luxon'
import Device from 'App/Models/Device'
import RehabilitationCategory from 'App/Models/RehabilitationCategory'

import { BaseModel, column, ManyToMany, manyToMany } from '@ioc:Adonis/Lucid/Orm'

export default class Exercise extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public mark: string

  @column()
  public description: string

  @column()
  public image: string

  @column()
  public has_statistics: boolean

  @column()
  public is_game: boolean

  @manyToMany(() => Device, {
    pivotTable: 'exercises_devices',
    pivotForeignKey: 'id_exercise',
    pivotRelatedForeignKey: 'id_device',
    pivotTimestamps: true,
    pivotColumns: ['level'],
  })
  public devices: ManyToMany<typeof Device>

  @manyToMany(() => RehabilitationCategory, {
    pivotTable: 'exercises_rehabilitation_categories',
    pivotForeignKey: 'id_exercise',
    pivotRelatedForeignKey: 'id_rehabilitation_category',
    pivotTimestamps: true,
    pivotColumns: ['level'],
  })
  public rehabilitationCategories: ManyToMany<typeof RehabilitationCategory>

  @column()
  public created_by: number

  @column()
  public updated_by: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
