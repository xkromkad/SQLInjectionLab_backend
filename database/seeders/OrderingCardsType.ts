import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import OrderingCardsType from 'App/Models/OrderingCardsType'

export default class extends BaseSeeder {
  public async run() {
    const payload = [
      {
        name: 'Mesiace',
        image: 'ordering/calendar.jpg',
        imageSource:
          'https://www.freepik.com/free-vector/calendar-icon-white-background_23722481.htm#query=calendar&position=2&from_view=search&track=robertav1_2_sidr',
      },
      {
        name: 'Dni',
        image: 'ordering/monday.jpg',
        imageSource:
          'https://www.freepik.com/free-photo/flat-lay-blue-monday-concept_10721487.htm#query=monday&position=0&from_view=search&track=robertav1_2_sidr',
      },
      {
        name: 'Čísla',
        image: 'ordering/numbers.jpg',
        imageSource:
          'https://www.freepik.com/free-vector/cartoon-number-collection-with-characters_2310784.htm#query=numbers&position=34&from_view=search&track=robertav1_2_sidr',
      },
      {
        name: 'Abeceda',
        image: 'ordering/alphabet.png',
        imageSource: 'https://pixabay.com/sk/illustrations/písmena-abecedy-abeceda-písmená-909040/',
      },
    ]
    await OrderingCardsType.createMany(payload)
  }
}
