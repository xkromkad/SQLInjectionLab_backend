import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import User from 'App/Models/User'

export default class extends BaseSeeder {
  public async run () {
    // Write your database queries inside the run method
    const payload = [
      {
        firstname: 'David',
        surname: 'Kromka',
        email: 'tester@test.sk',
        password: '123456',
        created_by: 1,
        updated_by: 1,
      },
      {
        firstname: 'Miriam',
        surname: 'Krišandová',
        email: 'tester2@test.sk',
        password: '123456',
        created_by: 1,
        updated_by: 1,
      },
    ]
    // Write your database queries inside the run method
    await User.createMany(payload)
  }
}
