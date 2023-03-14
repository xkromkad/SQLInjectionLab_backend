/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})

Route.get('centers', 'OrganizationsController.getCenters')

// REHABILITATION ROUTES
Route.group(() => {
  Route.get('rehabilitationCategories', 'RehabilitationCategoriesController.getCategories')
  Route.get('exercises', 'ExercisesController.getExercises')
}).prefix('rehabilitation')

// SIGN IN ROUTES
Route.group(() => {
  Route.post('register', 'AuthController.register')
  Route.post('login', 'AuthController.login')
  Route.post('logout', 'AuthController.logout').middleware('auth')
  Route.get('me', 'AuthController.me').middleware('auth')
}).prefix('auth')

Route.get('api/sessions/oauth/google', async ({ ally, auth }) => {
  return ally.use('google').redirect()
})

//OAuth CALLBACK
Route.get('google-signin-callback', 'GoogleSignInsController.handleCallback')
