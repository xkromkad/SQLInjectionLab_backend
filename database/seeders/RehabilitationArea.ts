import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RehabilitationArea from 'App/Models/RehabilitationArea'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        name: 'Horné končatiny',
      },
      {
        name: 'Dolné končatiny',
      },
      {
        name: 'Pozornosť',
      },
      {
        name: 'Pamäť',
      },
      {
        name: 'Rečové ťažkosti',
      },
    ]
    await RehabilitationArea.createMany(payload)
  }
}
