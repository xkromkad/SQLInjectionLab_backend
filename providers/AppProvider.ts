import type { ApplicationContract } from '@ioc:Adonis/Core/Application'

export default class AppProvider {
  constructor(protected app: ApplicationContract) {}

  public register() {
    // bind our implementation of DiscoverRepository to container
    this.app.container.singleton('Repositories/DiscoverRepository', (container) => {
      return container.make('App/Repositories/DiscoverRepository')
    })
    // bind our implementation of OrganizationRepository to container
    this.app.container.singleton('Repositories/OrganizationRepository', (container) => {
      return container.make('App/Repositories/OrganizationRepository')
    })
    // bind our implementation of RehabilitationRepository to container
    this.app.container.singleton('Repositories/RehabilitationRepository', (container) => {
      return container.make('App/Repositories/RehabilitationRepository')
    })
    // bind our implementation of NewsRepository to container
    this.app.container.singleton('Repositories/NewsRepository', (container) => {
      return container.make('App/Repositories/NewsRepository')
    })
  }

  public async boot() {
    // IoC container is ready
  }

  public async ready() {
    // App is ready
  }

  public async shutdown() {
    // Cleanup, since app is going down
  }
}
