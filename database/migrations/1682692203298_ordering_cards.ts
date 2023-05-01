import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'ordering_cards'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name', 60).notNullable()
      table.integer('order').notNullable()
      table.string('image', 60).nullable()
      table.string('image_source', 200).nullable()
      table
        .integer('type_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('ordering_cards_types')
        .onDelete('CASCADE')
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
