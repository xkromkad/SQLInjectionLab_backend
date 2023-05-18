import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Discover from 'App/Models/Discover'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        title: 'Cievna mozgová príhoda',
        text: 'Cievna mozgová príhoda, známa aj ako iktus alebo ľudovo povedaná porážka, je v dnešnej dobe stále jednou z najväčších hrozieb pre ľudské zdravie a jednou z naj- častejších príčin úmrtí na celom svete. Mnohí pacienti trpia trvalými následkami, ktoré sa môžu prejaviť v podobe porúch reči, koordinácie, pohybových návykov a ďalších symptómov. Preto je veľmi dôležité začať s rehabilitáciou čo najskôr po prekonaní prvej fázy ochorenia a sústrediť sa na plné nasadenie pacienta, aby sa minimalizovali následky.',
        image: 'discover/movement.png',
      },
    ]
    // Write your database queries inside the run method
    await Discover.createMany(payload)
  }
}
