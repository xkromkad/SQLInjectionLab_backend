import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Exercise from 'App/Models/Exercise'

export default class extends BaseSeeder {
  public async run() {
    const payload = [
      {
        name: 'Pexeso',
        mark: 'pexeso',
        description: 'Pexeso je skvelá hra na trénovanie pamäte.',
        image: 'pexeso.png',
        has_statistics: true,
        created_by: 1,
        updated_by: 1,
        devices: [
          { id: 1, level: 1 },
          { id: 2, level: 2 },
          { id: 3, level: 3 },
        ],
        rehabilitationCategories: [
          { id: 4, level: 2 },
          { id: 5, level: 1 },
          { id: 6, level: 3 },
        ],
      },
      {
        name: 'Nájdi čísla',
        mark: 'findNumbers',
        description:
          'Hľadanie čísel z pomedzi ostatných čísel je skvelý spôsob na trénovanie pozornosti a postrehu.',
        image: 'findNumbers.png',
        has_statistics: true,
        created_by: 1,
        updated_by: 1,
        devices: [
          { id: 1, level: 1 },
          { id: 2, level: 2 },
          { id: 3, level: 3 },
        ],
        rehabilitationCategories: [
          { id: 2, level: 1 },
          { id: 6, level: 1 },
        ],
      },
      {
        name: 'Nájdi písmenká',
        mark: 'findLetters',
        description:
          'Úlohou je nájsť zadané písmo spomedzi skupiny písmen. Pacient týmto cvičením trénuje svoju pozornosť a trénuje čítanie.',
        image: 'findLetters.png',
        has_statistics: true,
        created_by: 1,
        updated_by: 1,
        devices: [
          { id: 1, level: 1 },
          { id: 2, level: 2 },
          { id: 3, level: 3 },
        ],
        rehabilitationCategories: [
          { id: 2, level: 1 },
          { id: 6, level: 1 },
        ],
      },
      {
        name: 'Písanie čísel',
        mark: 'drawNumbers',
        image: 'drawNumbers.png',
        description:
          'Úlohou je napísať definované číslo. Pacient si precvičuje písanie, čítanie a jemnú motoriku.',
        created_by: 1,
        updated_by: 1,
        devices: [
          { id: 2, level: 1 },
          { id: 3, level: 2 },
        ],
        rehabilitationCategories: [
          { id: 2, level: 2 },
          { id: 7, level: 1 },
        ],
      },
      {
        name: 'Písanie písmen',
        mark: 'drawLetters',
        image: 'drawLetters.png',
        description:
          'Úlohou je napísať definované písmeno. Pacient si precvičuje písanie, čítanie a jemnú motoriku.',
        created_by: 1,
        updated_by: 1,
        devices: [
          { id: 2, level: 1 },
          { id: 3, level: 2 },
        ],
        rehabilitationCategories: [
          { id: 2, level: 2 },
          { id: 7, level: 1 },
        ],
      },
      {
        name: 'Logopedické cvičenia',
        mark: 'logopedic',
        image: 'logopedic.png',
        description: 'Videá s ukážkami logopedických cvičení.',
        is_game: false,
        created_by: 1,
        updated_by: 1,
        devices: [
          { id: 1, level: 1 },
          { id: 2, level: 1 },
          { id: 3, level: 1 },
        ],
        rehabilitationCategories: [
          { id: 2, level: 2 },
          { id: 6, level: 2 },
        ],
      },
      {
        name: 'Pohybové cvičenia',
        mark: 'movement',
        image: 'movement.png',
        description: 'Videá s ukážkami otáčania pacienta a nácviku postavenia sa.',
        is_game: false,
        created_by: 1,
        updated_by: 1,
        devices: [
          { id: 1, level: 1 },
          { id: 2, level: 1 },
          { id: 3, level: 1 },
        ],
        rehabilitationCategories: [{ id: 3, level: 1 }],
      },
      {
        name: 'Počítanie',
        mark: 'maths',
        image: 'maths.png',
        description: 'Počítanie príkladov na sčítanie, odčítanie, násobenie a delenie.',
        created_by: 1,
        updated_by: 1,
        devices: [
          { id: 1, level: 1 },
          { id: 2, level: 2 },
          { id: 3, level: 3 },
        ],
        rehabilitationCategories: [{ id: 1, level: 4 }],
      },
      {
        name: 'Opis obrázkov',
        mark: 'description',
        image: 'description.png',
        description: 'Diskutujte o zobrazenom obrázku, môžete použiť pomôcky.',
        created_by: 1,
        updated_by: 1,
        devices: [
          { id: 1, level: 1 },
          { id: 2, level: 1 },
          { id: 3, level: 1 },
        ],
        rehabilitationCategories: [
          { id: 1, level: 1 },
          { id: 4, level: 2 },
          { id: 5, level: 2 },
        ],
      },
      {
        name: 'Zoraďovanie objektov',
        mark: 'ordering',
        image: 'ordering.png',
        description: 'Zoraď dni, mesiace, čísla alebo písmenka do správneho poradia.',
        created_by: 1,
        updated_by: 1,
        devices: [
          { id: 1, level: 1 },
          { id: 2, level: 1 },
          { id: 3, level: 1 },
        ],
        rehabilitationCategories: [{ id: 1, level: 1 }],
      },
    ]

    // Create exercises and associate them with devices
    await Promise.all(
      payload.map(async (exerciseData) => {
        const devices = {}
        const rehabilitationCategories = {}
        exerciseData.devices.forEach((device) => {
          devices[device.id] = { level: device.level }
        })
        exerciseData.rehabilitationCategories.forEach((category) => {
          rehabilitationCategories[category.id] = { level: category.level }
        })
        const exercise = await Exercise.create(exerciseData)
        await exercise.related('devices').attach(devices)
        await exercise.related('rehabilitationCategories').attach(rehabilitationCategories)
      })
    )
  }
}
