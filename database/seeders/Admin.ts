import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Admin from 'App/Models/admin'

export default class AdminSeeder extends BaseSeeder {
  public async run() {
    await Admin.create({
      email: 'superadmin@picket.com',
      password: 'apassword',
      role: 'superadmin',
    })
  }
}
