import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'descriptions'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('title', 60)
      table.string('image', 60)
      table.string('image_source', 200)
      table.string('search', 150)
      table.string('see', 150)
      table.string('emotion', 150)
      table.string('fact', 150)
      table.string('imagine', 150)
      table.string('future', 150)
      table.string('story', 150)
      table.string('behaviour', 150)
      table
        .integer('type_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('description_types')
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
