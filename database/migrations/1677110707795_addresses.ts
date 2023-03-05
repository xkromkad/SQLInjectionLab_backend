import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'addresses'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('country', 60).notNullable()
      table.string('city', 60).notNullable()
      table.string('number', 20).notNullable()
      table.string('postal_code', 20).notNullable()
      table
        .integer('created_by')
        .nullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('NO ACTION')
      table
        .integer('updated_by')
        .nullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('NO ACTION')
      table.boolean('is_blocked')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
