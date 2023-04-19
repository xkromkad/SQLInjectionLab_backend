import { inject } from '@adonisjs/core/build/standalone'
import { WsContextContract } from '@ioc:Ruby184/Socket.IO/WsContext'

// inject repository from container to controller constructor
// we do so because we can extract database specific storage to another class
// and also to prevent big controller methods doing everything
// controler method just gets data (validates it) and calls repository
// also we can then test standalone repository without controller
// implementation is bind into container inside providers/AppProvider.ts

export default class ChannelController {
  public async deleteChannel() {
    console.log('fungujem')
  }
}
