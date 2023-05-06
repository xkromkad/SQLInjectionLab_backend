import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Organization from 'App/Models/Organization'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        name: 'Sanom',
        description:
          'SANOM je špecializovaná nemocnica v odbore fyziatrie, balneológie a liečebnej rehabilitácie (FBLR), členom Asociácie nemocníc Slovenska. Je zameraná na zdravotnú starostlivosť v oblasti liečebnej rehabilitácie, pričom tento jedinečný projekt čerpá zo skúseností svojho zakladateľa Sanatoria Klimkovice, ktorý už desiatky rokov takúto starostlivosť zabezpečuje v Českej republike.',
        address_id: 1,
        url: 'https://www.sanom.sk',
        image: 'organizations/sanom.jpg',
        imageSource: 'https://www.sanom.sk/sk/interiery-nemocnice/',
        created_by: 1,
        updated_by: 1,
      },
      {
        name: 'Sekunda pre život',
        description:
          'Sekunda pre život je občianske združenie, pacientska organizácia združujúca pacientov po cievnej mozgovej príhode a s fibriláciou predsiení.',
        address_id: 2,
        url: 'https://www.sekundaprezivot.sk',
        image: 'organizations/sekunda.jpg',
        imageSource:
          'https://www.facebook.com/photo/?fbid=470415081797604&set=pb.100064873473094.-2207520000.',
        created_by: 1,
        updated_by: 2,
      },
      {
        name: 'Ayurfyzio',
        description:
          'Sme mladí ľudia s chuťou a nadšením pre život. Máme túžbu poznávať život, seba a všetko okolo nás. Chceme neustále zlepšovať kvalitu svojho života aj nášho okolia.',
        address_id: 3,
        url: 'https://www.ayurfyzio.sk',
        image: 'organizations/ayurfyzio.jpg',
        imageSource:
          'https://www.facebook.com/photo/?fbid=493587036107479&set=pb.100063685596827.-2207520000.',
        created_by: 2,
        updated_by: 1,
      },
    ]
    await Organization.createMany(payload)
  }
}
