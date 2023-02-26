import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'addresses'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('user_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
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
      table.boolean('is_blocked')
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
