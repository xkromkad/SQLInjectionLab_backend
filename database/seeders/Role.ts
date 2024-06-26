import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Role from 'App/Models/Role'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        role_name: 'admin',
      },
      {
        role_name: 'patient',
      },
      {
        role_name: 'guardian',
      },
      {
        role_name: 'doctor',
      },
      {
        role_name: 'manager',
      },
    ]
    // Write your database queries inside the run method
    await Role.createMany(payload)
  }
}
