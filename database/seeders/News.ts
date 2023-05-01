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
      {
        title: 'Písanie čísel',
        content: 'Nové cvičenie na tréning čítania a písanie čísel.',
        image: 'drawLetters.png',
        page: 'rehabilitation/drawLetters',
      },
      {
        title: 'Písanie písmen',
        content: 'Nové cvičenie na tréning čítania a písanie písmen.',
        image: 'drawNumbers.png',
        page: 'rehabilitation/drawNumbers',
      },
      {
        title: 'Logopedické cvičenia',
        content: 'Videá s vysvetlením logopedických cvičení.',
        image: 'logopedic.png',
        page: 'rehabilitation/logopedic',
      },
      {
        title: 'Počítanie',
        content: 'Cvičenie na výpočet jednoduchým matematických príkladov.',
        image: 'maths.png',
        page: 'rehabilitation/maths',
      },
    ]
    await News.createMany(payload)
  }
}
