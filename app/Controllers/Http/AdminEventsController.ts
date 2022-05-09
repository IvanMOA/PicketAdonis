import Event from 'App/Models/event'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
export default class AdminEventsController {
  public async index({ view, request }: HttpContextContract) {
    const pageFromQs = request.qs()?.page
    const page = pageFromQs ? parseInt(pageFromQs, 10) : 1
    return view.render('events/events_table', {
      events: await Database.from('events').paginate(page, 10),
    })
  }
  public async create({ view }: HttpContextContract) {
    return view.render('events/events_create')
  }
}
