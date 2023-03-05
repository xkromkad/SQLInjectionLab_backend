import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Device from 'App/Models/Device'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        device_type: 'computer',
      },
      {
        device_type: 'tablet',
      },
      {
        device_type: 'mobile',
      },
    ]
    // Write your database queries inside the run method
    await Device.createMany(payload)
  }
}
