import Factory from '@ioc:Adonis/Lucid/Factory'
import Admin from 'App/Models/admin'
import Event from 'App/Models/event'
import { addDays } from 'date-fns'
import { add } from 'slashes'
import { DateTime } from 'luxon'

export const AdminFactory = Factory.define(Admin, ({ faker }) => {
  return {
    role: 'admin',
    password: faker.internet.password(),
    email: faker.internet.email(),
  }
})

export const EventFactory = Factory.define(Event, ({ faker }) => {
  return {
    name: faker.lorem.slug(),
    description: faker.lorem.sentences(2),
    startsAt: DateTime.fromJSDate(addDays(new Date(), 1)),
  }
}).build()
