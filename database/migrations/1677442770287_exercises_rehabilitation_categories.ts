import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'exercises_rehabilitation_categories'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('id_exercise')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('exercises')
        .onDelete('CASCADE')
      table
        .integer('id_rehabilitation_category')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('rehabilitation_categories')
        .onDelete('CASCADE')
      table.integer('level')
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
