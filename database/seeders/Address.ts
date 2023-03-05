import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Address from 'App/Models/Address'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        country: 'Slovakia',
        city: 'Bratislava',
        number: '1234/56',
        postal_code: '02805',
      },
    ]
    // Write your database queries inside the run method
    await Address.createMany(payload)
  }
}
