import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Zones extends BaseSchema {
  protected tableName = 'zones'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('event_id').unsigned().references('events.id').onDelete('CASCADE')
      table.string('name')
      table.boolean('active')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
