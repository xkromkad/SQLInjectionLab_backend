import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'plans'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table
        .integer('id_user')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('CASCADE')
      table
        .integer('id_exercise')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users') //zmeniť na exercises
        .onDelete('CASCADE')
      table.integer('id_exercise_detail').notNullable().unsigned()
      table.string('description', 1000)
      table.timestamp('date_notification', { useTz: true })
      table
        .integer('created_by')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
      table
        .integer('updated_by')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('users')
        .onDelete('SET NULL')
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
