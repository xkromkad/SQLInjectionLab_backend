import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'

export default class IndexSeeder extends BaseSeeder {
  private async runSeeder(seeder: { default: typeof BaseSeeder }) {
    await new seeder.default(this.client).run()
  }

  public async run() {
    await this.runSeeder(await import('../User'))
    await this.runSeeder(await import('../Role'))
    await this.runSeeder(await import('../RehabilitationCategory'))
    await this.runSeeder(await import('../Address'))
    await this.runSeeder(await import('../Organization'))
    await this.runSeeder(await import('../Device'))
    await this.runSeeder(await import('../Exercise'))
  }
}
