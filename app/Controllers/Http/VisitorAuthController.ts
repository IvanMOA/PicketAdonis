import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { rules, schema } from '@ioc:Adonis/Core/Validator'
import Visitor from 'App/Models/visitor'
import { sleep } from 'App/Helpers/sleep'
export default class VisitorAuthController {
  public async registerIndex({ view, auth, response }: HttpContextContract) {
    try {
      await auth.use('visitor').authenticate()
      return response.redirect('/')
    } catch {}
    try {
      await auth.use('admin').authenticate()
      return response.redirect('/admin/login')
    } catch {}
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
    await Visitor.create({
      email: payload.email,
      password: payload.password,
      role: 'visitor',
    })
    return 'Should register xd'
  }
  public async loginIndex({ view, auth, response }: HttpContextContract) {
    try {
      await auth.use('visitor').authenticate()
      return response.redirect('/')
    } catch {
      return view.render('login')
    }
  }
  public async login({ view, request, auth }: HttpContextContract) {
    const registerSchema = schema.create({
      email: schema.string({ trim: true }, [
        rules.minLength(10),
        rules.maxLength(100),
        rules.email(),
      ]),
      password: schema.string({ trim: true }, [rules.minLength(6), rules.maxLength(100)]),
    })
    const payload = await request.validate({ schema: registerSchema })
    await auth.use('visitor').attempt(payload.email, payload.password)
    return view.render('home')
  }
  public async logout({ response, auth }: HttpContextContract) {
    await auth.logout()
    return response.redirect('/login')
  }
}
