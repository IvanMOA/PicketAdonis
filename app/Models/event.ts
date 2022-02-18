import { DateTime } from 'luxon'
import {
  BaseModel,
  BelongsTo,
  belongsTo,
  column,
  HasMany,
  hasMany,
  hasOne,
} from '@ioc:Adonis/Lucid/Orm'
import Place from 'App/Models/place'
import Zone from './zone'

export default class Event extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public description: string

  @column()
  public room: number

  @belongsTo(() => Place)
  public place: BelongsTo<typeof Place>

  @hasMany(() => Zone)
  public zones: HasMany<typeof Zone>

  @column.dateTime({ autoCreate: false })
  public startsAt: DateTime

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
