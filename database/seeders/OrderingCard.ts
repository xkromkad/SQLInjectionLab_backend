import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import OrderingCard from 'App/Models/OrderingCard'

export default class extends BaseSeeder {
  public async run() {
    const payload = [
      { name: 'Január', order: 1, typeId: 1 },
      { name: 'Február', order: 2, typeId: 1 },
      { name: 'Marec', order: 3, typeId: 1 },
      { name: 'Apríl', order: 4, typeId: 1 },
      { name: 'Máj', order: 5, typeId: 1 },
      { name: 'Jún', order: 6, typeId: 1 },
      { name: 'Júl', order: 7, typeId: 1 },
      { name: 'August', order: 8, typeId: 1 },
      { name: 'September', order: 9, typeId: 1 },
      { name: 'Október', order: 10, typeId: 1 },
      { name: 'November', order: 11, typeId: 1 },
      { name: 'December', order: 12, typeId: 1 },
      { name: 'Pondelok', order: 1, typeId: 2 },
      { name: 'Utorok', order: 2, typeId: 2 },
      { name: 'Streda', order: 3, typeId: 2 },
      { name: 'Štvrtok', order: 4, typeId: 2 },
      { name: 'Piatok', order: 5, typeId: 2 },
      { name: 'Sobota', order: 6, typeId: 2 },
      { name: 'Nedeľa', order: 7, typeId: 2 },
    ]
    await OrderingCard.createMany(payload)
  }
}
