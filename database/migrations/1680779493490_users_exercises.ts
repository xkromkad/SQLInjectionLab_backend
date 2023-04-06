import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'users_exercises'

  public async up() {
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
        .integer('exercise_id')
        .notNullable()
        .unsigned()
        .references('id')
        .inTable('exercises')
        .onDelete('CASCADE')
      table.unique(['user_id', 'exercise_id'])
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
