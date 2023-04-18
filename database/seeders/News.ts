import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import News from 'App/Models/News'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        title: 'Pexeso',
        content: 'Pexeso je skvelá hra na cvičenie pamäti.',
        image: 'pexeso.png',
        page: 'rehabilitation/pexeso',
      },
    ]
    await News.createMany(payload)
  }
}
