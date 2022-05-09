import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Admins extends BaseSchema {
  protected tableName = 'admins'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').primary().notNullable()
      table
        .integer('dependency_id')
        .unsigned()
        .references('dependencies.id')
        .onDelete('CASCADE')
        .nullable()
      table.string('email', 255).notNullable().notNullable()
      table.string('password', 180).notNullable().notNullable()
      table.string('remember_me_token').nullable().notNullable()
      table.timestamp('created_at', { useTz: true }).notNullable()
      table.timestamp('updated_at', { useTz: true }).notNullable().notNullable()
      table.enum('role', ['visitor', 'admin', 'superadmin']).notNullable()
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
