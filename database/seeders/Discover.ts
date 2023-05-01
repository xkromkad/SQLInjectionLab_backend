import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Discover from 'App/Models/Discover'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        title: 'Ako správne cvičiť',
        text: 'Viete, ako správne cvičiť. Dozviete sa to tu.',
        image: 'discover/exercise.jpg',
      },
    ]
    // Write your database queries inside the run method
    await Discover.createMany(payload)
  }
}
