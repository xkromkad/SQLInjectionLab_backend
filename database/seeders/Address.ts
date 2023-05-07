import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Address from 'App/Models/Address'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        country: 'Slovakia',
        city: 'Bratislava',
        street: 'Nobelova',
        number: '1296/18',
        postal_code: '831 02',
      },
      {
        country: 'Slovakia',
        city: 'Poprad',
        street: 'Karpatská',
        number: '7',
        postal_code: '058 01',
      },
      {
        country: 'SLovensko',
        city: 'Chorvátsky Grob',
        street: 'Bottova',
        number: '30',
        postal_code: '900 25',
      },
    ]
    // Write your database queries inside the run method
    await Address.createMany(payload)
  }
}
