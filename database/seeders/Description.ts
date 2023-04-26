import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Description from 'App/Models/Description'

export default class extends BaseSeeder {
  public async run() {
    // Write your database queries inside the run method
    const payload = [
      {
        title: 'Nakupovanie v potravinách',
        image: 'description/shopping.jpg',
        imageSource:
          'https://www.freepik.com/free-photo/happy-family-with-child-shopping-cart-buying-food_6729847.htm#query=grocery%20shopping&position=0&from_view=search&track=robertav1_2_sidr',
        search: 'Kde sa na obrázku nachádza ananás?',
        see: 'Opíš, čo sa deje na obrázku!',
        emotion: 'Ako sa ľudia na obrázku cítia?',
        fact: 'Aké obchody s potravinami poznáš?',
        imagine: 'Ak by si bol v obchode, čo by si si kúpil? Aké jedlo máš rád?',
        future: 'Čo by si musel dokúpiť, ak by si si chcel upiecť jablkový koláč?',
        story: 'Opíš priebeh nákupu, od príchodu do obchodu po zaplatenie.',
        behaviour: 'Čo sa môže a čo nemôže robiť v obchode?',
        typeId: 1,
      },
      {
        title: 'Cestovanie v autobuse',
        image: 'description/bus.jpg',
        imageSource:
          'https://www.freepik.com/free-photo/displeased-entrepreneur-making-phone-call-while-commuting-work-by-bus_26922387.htm#query=crowded%20bus%20travel&position=23&from_view=search&track=robertav1_2_sidr',
        search: 'Kde sa na obrázku nachádzajú hodinky?',
        see: 'Opíš, čo robia ľudia na obrázku!',
        emotion: 'Ako sa asi cíti muž na obrázku?',
        fact: 'Do jedného väčšieho autobusu sa zmestí aj viac ako 50 ľudí? Do koľkých aut by sa 50 ľudí zmestilo?',
        imagine: 'Ak by si mohol ísť na výlet autobusom, kde by si šiel?',
        future: 'Budú ľudia v budúcnosti využívať autobusovú dopravu viac ako ľudia dnes?',
        story: 'Povedz, čo asi mu na obrázku hovorí do telefónu a kde cestuje!',
        behaviour: 'Aké pravidlá treba dodržiavať pri ceste autobusom?',
        typeId: 1,
      },
      {
        title: 'Deti v škole',
        image: 'description/school.jpg',
        imageSource:
          'https://www.freepik.com/free-photo/students-knowing-right-answer_13132985.htm#query=shool&position=5&from_view=search&track=robertav1_2_sidr',
        search: 'Majú žiaci na stole perá?',
        see: 'Opíš, čo sa deje na obrázku!',
        emotion: 'Sú deti na obrázku bojazlivé a hanblivé?',
        fact: 'Aký predmet majú deti na obrázku? Vedel si, že rovnaký predmet môžeš trénovať aj v našej rehabilitačnej aplikácii?',
        imagine: 'Spomeň si na svoje školské časy. Aký si bol/bola žiak/žiačka?',
        future: 'Ako bude vyzerať škola v budúcnosti? Nahradia učiteľov roboty?',
        story: 'Čo sa pýta pani učiteľka žiakov? Budú jej vedieť odpovedať?',
        behaviour: 'Prečo majú žiaci dvihnuté ruky? Aké pravidlá platia v škole?',
        typeId: 1,
      },
    ]
    // Write your database queries inside the run method
    await Description.createMany(payload)
  }
}
