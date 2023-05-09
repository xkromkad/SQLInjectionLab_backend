import { DateTime } from 'luxon'
import { BaseModel, column, belongsTo, BelongsTo } from '@ioc:Adonis/Lucid/Orm'
import User from './User'
import Organization from './Organization'

export default class OrganizationsComment extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public comment: string

  @column()
  public userId: number

  @belongsTo(() => User, {
    localKey: 'user_id',
    foreignKey: 'id',
  })
  public user: BelongsTo<typeof User>

  @column()
  public organizationId: number

  @belongsTo(() => Organization, {
    localKey: 'organization_id',
    foreignKey: 'id',
  })
  public organization: BelongsTo<typeof Organization>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
