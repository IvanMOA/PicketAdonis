import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import * as Http from 'http'
import { rules, schema } from '@ioc:Adonis/Core/Validator'

export default class AdminAuthController {
  public async loginIndex({ view, auth, response }: HttpContextContract) {
    try {
      await auth.use('admin').authenticate()
      return response.redirect('/admin/dashboard')
    } catch {
      return view.render('admin/admin_login')
    }
  }
  public async login({ request, auth, response }: HttpContextContract) {
    const loginSchema = schema.create({
      email: schema.string({ trim: true }, [
        rules.minLength(10),
        rules.maxLength(100),
        rules.email(),
      ]),
      password: schema.string({ trim: true }, [rules.minLength(6), rules.maxLength(100)]),
    })
    const payload = await request.validate({ schema: loginSchema })
    await auth.use('admin').attempt(payload.email, payload.password)
    return response.redirect('/admin/dashboard')
  }
}
