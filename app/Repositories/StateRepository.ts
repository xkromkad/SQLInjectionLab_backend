import User from 'App/Models/User'
import StateUser from 'App/Models/StateUser'
import type { StateRepositoryContract } from '@ioc:Repositories/StateRepository'
import { DateTime } from 'luxon'

export default class StateRepository implements StateRepositoryContract {
  public async getState(user: User): Promise<StateUser | null> {
    const state = await user.related('state').query().first()
    return state
  }

  public async saveState(user: User, state: string): Promise<void> {
    const stateFound = await user.related('state').query().first()
    if (stateFound) {
      stateFound.json = state
      await stateFound.save()
    } else {
      const newState = new StateUser()
      newState.user_id = user.id
      newState.json = state
      await newState.save()
    }
  }
}
