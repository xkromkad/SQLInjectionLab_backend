// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'
import RegisterUserValidator from 'App/Validators/RegisterUserValidator'

export default class AuthController {
  public async register({ request }: HttpContextContract) {
    const data = await request.validate(RegisterUserValidator)
    return await User.create(data)
  }

  public async login({ auth, request }: HttpContextContract) {
    const email = request.input('email')
    const password = request.input('password')

    return auth.use('web').attempt(email, password)
  }

  public async logout({ auth }: HttpContextContract) {
    return auth.use('web').logout()
  }
}
