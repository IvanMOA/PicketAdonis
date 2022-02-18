import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Seats extends BaseSchema {
  protected tableName = 'seats'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('zone_id').unsigned().references('zones.id').onDelete('CASCADE')
      table.string('name')
      table.boolean('available')
      table.boolean('active')
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
