import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import { EventFactory } from 'Database/factories'

export default class EventSeeder extends BaseSeeder {
  public async run() {
    const a = ''
    await EventFactory.createMany(50)
  }
}
