import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'exercises'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 60).notNullable()
      table.string('mark', 20).notNullable()
      table.string('description', 1000)
      table.string('image', 60).nullable()
      table.boolean('has_statistics').nullable()
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

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
