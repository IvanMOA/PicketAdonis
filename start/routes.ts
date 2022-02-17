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
import Admin from 'App/Models/admin'
Route.get('/', async ({ view }) => {
  return view.render('home')
}).middleware('auth:visitor')
Route.get('/register', 'VisitorAuthController.registerIndex')
Route.post('/register', 'VisitorAuthController.register')
Route.get('/login', 'VisitorAuthController.loginIndex')
Route.post('/login', 'VisitorAuthController.login')
Route.post('/logout', 'VisitorAuthController.logout')
Route.group(() => {
  Route.get('/dashboard', async ({ view }) => {
    return view.render('admin/dashboard')
  }).middleware('auth:admin')
  Route.get('/events', async ({ view }) => {
    return view.render('events/events_table')
  }).middleware('auth:admin')
  Route.get('/login', 'AdminAuthController.loginIndex')
  Route.post('/login', 'AdminAuthController.login')
}).prefix('/admin')
