import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Device from 'App/Models/Device'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        device_type: 'computer',
        icon: 'computer',
      },
      {
        device_type: 'tablet',
        icon: 'tablet_android',
      },
      {
        device_type: 'mobile',
        icon: 'smartphone',
      },
    ]
    // Write your database queries inside the run method
    await Device.createMany(payload)
  }
}
