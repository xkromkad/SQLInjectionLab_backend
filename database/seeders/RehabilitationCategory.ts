import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import RehabilitationCategory from 'App/Models/RehabilitationCategory'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        name: 'Rozprávanie',
        icon: 'speaking.svg',
      },
      {
        name: 'Čítanie',
        icon: 'reading.svg',
      },
      {
        name: 'Pohyb',
        icon: 'movement.svg',
      },
      {
        name: 'Logické myslenie',
        icon: 'logic.svg',
      },
      {
        name: 'Pamäť',
        icon: 'memory.svg',
      },
      {
        name: 'Pozornosť',
        icon: 'focus.svg',
      },
      {
        name: 'Jemná motorika',
        icon: 'painting.svg',
      },
    ]
    await RehabilitationCategory.createMany(payload)
  }
}
