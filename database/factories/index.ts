import Factory from '@ioc:Adonis/Lucid/Factory'
import Admin from 'App/Models/admin'

export const AdminFactory = Factory.define(Admin, ({ faker }) => {
  return {
    role: 'admin',
    password: faker.internet.password(),
    email: faker.internet.email(),
  }
})
