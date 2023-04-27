import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import DescriptionType from 'App/Models/DescriptionType'

export default class extends BaseSeeder {
  public async run() {
    const payload = [
      {
        name: 'Ľudia',
        image: 'description/shopping.jpg',
        imageSource:
          'https://www.freepik.com/free-photo/happy-family-with-child-shopping-cart-buying-food_6729847.htm#query=grocery%20shopping&position=0&from_view=search&track=robertav1_2_sidr',
      },
      {
        name: 'Zvieratá',
        image: 'description/farm.jpg',
        imageSource:
          'https://www.freepik.com/free-photo/front-view-woman-holding-bucket-outdoors_29608993.htm#query=farmer%20sheep&position=3&from_view=search&track=robertav1_2_sidr',
      },
    ]
    // Write your database queries inside the run method
    await DescriptionType.createMany(payload)
  }
}
