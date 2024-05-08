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

Route.get('state', 'StateController.getState').middleware('auth')
Route.post('state', 'StateController.saveState').middleware('auth')

// NEWS ROUTES
Route.get('news', 'NewsController.getNews')

// COMMUNITY ROUTES
Route.group(() => {
  Route.get('getPosts/:page', 'CommunityController.getPosts').middleware('auth')
  Route.get('getPageCount', 'CommunityController.getPageCount').middleware('auth')
  Route.post('likePost', 'CommunityController.likePost').middleware('auth')
}).prefix('community')

// ORGANIZATION ROUTES
Route.get('organizations', 'OrganizationsController.getOrganizations')
Route.group(() => {
  Route.post('sendComment', 'OrganizationsController.sendComment').middleware('auth')
}).prefix('organizations')

// DISCOVER ROUTES
Route.group(() => {
  Route.get('articles', 'DiscoversController.getArticles')
  Route.get('article/:id', 'DiscoversController.getArticle')
}).prefix('discover')

// REHABILITATION ROUTES
Route.group(() => {
  Route.get('categories', 'RehabilitationCategoriesController.getCategories')
  Route.get('exercises', 'ExercisesController.getExercises')
  Route.get('savedExercises', 'ExercisesController.getUserExercises').middleware('auth')
  Route.get('pexeso/getStatistics', 'PexesoController.getStatistics').middleware('auth')
  Route.get('devices', 'DevicesController.getDevices')
  Route.get('description/types', 'DescriptionsController.getTypes')
  Route.get('description/cards/:type', 'DescriptionsController.getCards')
  Route.get('ordering/types', 'OrderingCardsController.getTypes')
  Route.get('ordering/cards/:type', 'OrderingCardsController.getCards')
  Route.post('saveUserExercise', 'ExercisesController.saveUserExercise').middleware('auth')
  Route.post('removeUserExercise', 'ExercisesController.removeUserExercise').middleware('auth')
  Route.post('pexeso/save', 'PexesoController.savePexeso').middleware('auth')
  Route.post('pexeso/share', 'PexesoController.sharePexeso').middleware('auth')
  Route.post('findLetters/save', 'FindLettersController.saveLetters').middleware('auth')
  Route.post('findLetters/share', 'FindLettersController.shareLetters').middleware('auth')
  Route.post('findNumbers/save', 'FindNumbersController.saveNumbers').middleware('auth')
  Route.post('findNumbers/share', 'FindNumbersController.shareNumbers').middleware('auth')
  Route.get('findLetters/getStatistics', 'FindLettersController.getStatistics').middleware('auth')
  Route.get('findNumbers/getStatistics', 'FindNumbersController.getStatistics').middleware('auth')
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
