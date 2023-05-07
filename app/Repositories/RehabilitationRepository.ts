import RehabilitationCategory from 'App/Models/RehabilitationCategory'
import Exercise from 'App/Models/Exercise'
import User from 'App/Models/User'
import Pexeso from 'App/Models/Pexeso'
import type { RehabilitationRepositoryContract } from '@ioc:Repositories/RehabilitationRepository'
import { DateTime } from 'luxon'
import Device from 'App/Models/Device'
import DescriptionType from 'App/Models/DescriptionType'
import Description from 'App/Models/Description'
import OrderingCardsType from 'App/Models/OrderingCardsType'
import OrderingCard from 'App/Models/OrderingCard'
import FindNumber from 'App/Models/FindNumber'
import FindLetter from 'App/Models/FindLetter'

export default class RehabilitationRepository implements RehabilitationRepositoryContract {
  public async getRehabilitationCategories(): Promise<RehabilitationCategory[]> {
    return await RehabilitationCategory.all()
  }

  public async getExercises(): Promise<Exercise[]> {
    const exercises = await Exercise.query()
      .preload('devices', (query) => {
        query.pivotColumns(['level'])
      })
      .preload('rehabilitationCategories')
      .exec()
    return exercises
  }

  public async getUserExercises(user: User): Promise<number[]> {
    const exerciseIds = await user.related('exercises').query().select('id')
    return exerciseIds.map((exercise) => exercise.id)
  }

  public async saveUserExercise(user: User, idExercise: number): Promise<Exercise> {
    const exercise = await Exercise.findOrFail(idExercise)
    await user.related('exercises').attach([exercise.id])
    return exercise
  }

  public async removeUserExercise(user: User, idExercise: number): Promise<void> {
    const exercise = await Exercise.findOrFail(idExercise)
    await user.related('exercises').detach([exercise.id])
  }

  public async saveNumbers(
    user: User,
    time: number,
    date: DateTime,
    size: number,
    correctRate: number,
    missedtRate: number
  ): Promise<void> {
    const findNumber = new FindNumber()

    findNumber.time = time
    findNumber.date = date
    findNumber.size = size
    findNumber.correctRate = correctRate
    findNumber.missedRate = missedtRate
    findNumber.user_id = user.id

    await findNumber.save()
  }

  public async saveLetters(
    user: User,
    time: number,
    date: DateTime,
    size: number,
    correctRate: number,
    missedtRate: number
  ): Promise<void> {
    const findLetter = new FindLetter()

    findLetter.time = time
    findLetter.date = date
    findLetter.size = size
    findLetter.correctRate = correctRate
    findLetter.missedRate = missedtRate
    findLetter.user_id = user.id

    await findLetter.save()
  }

  public async savePexeso(user: User, time: number, date: DateTime, size: number): Promise<void> {
    const pexeso = new Pexeso()

    pexeso.time = time
    pexeso.date = date
    pexeso.size = size
    pexeso.user_id = user.id

    await pexeso.save()
  }

  public async getStatistics(user: User): Promise<Pexeso[]> {
    const statistics = await Pexeso.query().where('user_id', user.id)
    return statistics
  }

  public async getNumbersStatistics(user: User): Promise<FindNumber[]> {
    const statistics = await FindNumber.query().where('user_id', user.id)
    return statistics
  }

  public async getLettersStatistics(user: User): Promise<FindLetter[]> {
    const statistics = await FindLetter.query().where('user_id', user.id)
    return statistics
  }

  public async getDevices(): Promise<Device[]> {
    return await Device.all()
  }

  public async getDescriptionTypes(): Promise<DescriptionType[]> {
    return await DescriptionType.all()
  }

  public async getDescriptionCards(type: string): Promise<Description[]> {
    return await Description.query().where('typeId', type).select()
  }

  public async getOrderingTypes(): Promise<OrderingCardsType[]> {
    return await OrderingCardsType.all()
  }

  public async getOrderingCards(type: string): Promise<OrderingCard[]> {
    return await OrderingCard.query().where('typeId', type).select()
  }
}
