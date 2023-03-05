import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import User from 'App/Models/User'

export default class GoogleSignInsController {
  public async handleCallback({ ally, auth, response }: HttpContextContract) {
    const googleUser = ally.use('google')

    /**
     * User has explicitly denied the login request
     */
    if (googleUser.accessDenied()) {
      return 'Access was denied'
    }

    /**
     * Unable to verify the CSRF state
     */
    if (googleUser.stateMisMatch()) {
      return 'Request expired. try again'
    }

    /**
     * There was an unknown error during the redirect
     */
    if (googleUser.hasError()) {
      return googleUser.getError()
    }

    /**
     * Finally, access the user
     */
    const user = await googleUser.user()

    const findUser = {
      email: user.email as string,
    }

    const userDetails = {
      firstname: user.name as string,
      surname: user.name as string,
      email: user.email as string,
      password: user.name as string,
      provider_id: user.id as string,
      provider: 'google',
      created_by: 1,
      updated_by: 1,
    }

    const newUser = await User.firstOrCreate(findUser, userDetails)

    let token
    auth
      .use('api')
      .login(newUser)
      .then((tokenvalue) => {
        token = tokenvalue.token
      })
    return response
      .cookie('token', token, { httpOnly: true })
      .redirect('http://localhost:9000/#/auth/login')
    //const url = `http://localhost:9000/#/auth/login`
    //return response.redirect().toPath(url)
  }
}
