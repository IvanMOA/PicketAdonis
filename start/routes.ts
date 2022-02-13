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
import { schema, rules } from '@ioc:Adonis/Core/Validator'

Route.get('/', async ({ view }) => {
  return view.render('welcome')
})
Route.get('/register', async ({ view }) => {
  return view.render('register')
})
Route.post('/register', async ({ request }) => {
  console.log('a');
  const registerSchema = schema.create({
    email: schema.string({ trim: true }, [
      rules.minLength(10),
      rules.maxLength(100),
      rules.email(),
    ]),
    password: schema.string({ trim: true }, [
      rules.minLength(6),
      rules.maxLength(100),
      rules.confirmed('confirmPassword'),
    ]),
  })
  const payload = await request.validate({ schema: registerSchema })
  console.log(payload);
  return 'Should register xd'
})
