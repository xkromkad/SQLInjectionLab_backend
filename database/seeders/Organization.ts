import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Organization from 'App/Models/Organization'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        name: 'AntiStroke',
        address_id: 1,
        created_by: 1,
        updated_by: 1,
      },
      {
        name: 'Pomocná ruka',
        address_id: 2,
        created_by: 1,
        updated_by: 2,
      },
      {
        name: 'Logopedika',
        address_id: 3,
        created_by: 2,
        updated_by: 1,
      },
    ]
    await Organization.createMany(payload)
  }
}
