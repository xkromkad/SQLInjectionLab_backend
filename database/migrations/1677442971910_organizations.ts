import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'organizations'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 180).notNullable()
      table
        .integer('created_by')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('NO ACTION')
      table
        .integer('updated_by')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('NO ACTION')
      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
