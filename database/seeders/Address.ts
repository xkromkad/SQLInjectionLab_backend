import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Address from 'App/Models/Address'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        country: 'Slovakia',
        city: 'Bratislava',
        street: 'Sv. Vincenta',
        number: '1234/56',
        postal_code: '02805',
      },
      {
        country: 'Slovakia',
        city: 'Poprad',
        street: 'Podtatranská',
        number: '1111/56',
        postal_code: '05801',
      },
      {
        country: 'SLovensko',
        city: 'Košice',
        street: 'Košická',
        number: '2211/88',
        postal_code: '12345',
      },
    ]
    // Write your database queries inside the run method
    await Address.createMany(payload)
  }
}
