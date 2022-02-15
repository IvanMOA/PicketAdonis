import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class VisitorsSchema extends BaseSchema {
  protected tableName = 'visitors'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary()
      table.string('email', 255).notNullable()
      table.string('password', 180).notNullable()
      table.string('remember_me_token').nullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable()
      table.enum('role', ['visitor', 'admin'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
