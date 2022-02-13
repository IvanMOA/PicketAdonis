import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/user'
import { sleep } from 'App/Helpers/sleep'
export default class VisitorAuthController {
  public async registerIndex({ view }: HttpContextContract) {
    return view.render('register')
  }
  public async register({ request }: HttpContextContract) {
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
    await User.create({
      email: payload.email,
      password: payload.password,
    })
    return 'Should register xd'
  }
  public async loginIndex({ view }: HttpContextContract) {
    return view.render('login')
  }
}
