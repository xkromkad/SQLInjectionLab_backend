import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Exercise from 'App/Models/Exercise'

export default class extends BaseSeeder {
  public async run() {
    const payload = [
      {
        name: 'Pexeso',
        mark: 'pexeso',
        description: 'Pexeso je skvelá hra na trénovanie pamäte.',
        created_by: 1,
        updated_by: 1,
        devices: [
          { id: 1, level: 2 }, // associate device with id 1 and level 2
          { id: 2, level: 1 }, // associate device with id 2 and level 1
        ],
        rehabilitationCategories: [
          { id: 1, level: 2 }, // associate device with id 1 and level 2
          { id: 2, level: 1 }, // associate device with id 2 and level 1
        ],
      },
      {
        name: 'Nájdi čísla',
        mark: 'findNumbers',
        description:
          'Hľadanie čísel z pomedzi ostatných čísel je skvelý spôosob na trénovanie pozornosti a postrehu.',
        created_by: 1,
        updated_by: 1,
        devices: [
          { id: 1, level: 2 }, // associate device with id 1 and level 2
          { id: 2, level: 1 }, // associate device with id 2 and level 1
        ],
        rehabilitationCategories: [
          { id: 1, level: 2 }, // associate device with id 1 and level 2
          { id: 2, level: 1 }, // associate device with id 2 and level 1
        ],
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
