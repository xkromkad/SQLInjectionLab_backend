import { DateTime } from 'luxon'
import Hash from '@ioc:Adonis/Core/Hash'
import {
  column,
  beforeSave,
  BaseModel,
  manyToMany,
  ManyToMany,
  hasOne,
  HasOne,
  hasMany,
  HasMany,
} from '@ioc:Adonis/Lucid/Orm'
import Role from 'App/Models/Role'
import Exercise from './Exercise'
import StateUser from './StateUser'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public firstname: string

  @column()
  public surname: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public rememberMeToken: string | null

  @column()
  public providerId: string

  @column()
  public provider: string

  @column()
  public created_by: number

  @column()
  public updated_by: number

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime

  @beforeSave()
  public static async hashPassword(user: User) {
    if (user.$dirty.password) {
      user.password = await Hash.make(user.password)
    }
  }

  @manyToMany(() => Role, {
    pivotTable: 'users_roles',
    pivotForeignKey: 'user_id',
    pivotRelatedForeignKey: 'role_id',
    pivotTimestamps: false,
    //pivotColumns: ['joined_at'],
    // onQuery: (query) => {
    //   query.where('isActive', true)
    // }
  })
  public roles: ManyToMany<typeof Role>

  @hasMany(() => Exercise)
  public adminChannels: HasMany<typeof Exercise>

  @hasOne(() => StateUser, {
    foreignKey: 'user_id',
    localKey: 'id',
  })
  public state: HasOne<typeof StateUser>

  @manyToMany(() => Exercise, {
    pivotTable: 'users_exercises',
    pivotForeignKey: 'user_id',
    pivotRelatedForeignKey: 'exercise_id',
    pivotTimestamps: false,
  })
  public exercises: ManyToMany<typeof Exercise>
}
