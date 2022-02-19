import { BaseCommand } from '@adonisjs/core/build/standalone'
import Event from 'App/Models/event'
import Database from '@ioc:Adonis/Lucid/Database'

export default class DbReset extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'db:reset'

  /**
   * Command description is displayed in the "help" output
   */
  public static description = ''

  public static settings = {
    /**
     * Set the following value to true, if you want to load the application
     * before running the command. Don't forget to call `node ace generate:manifest`
     * afterwards.
     */
    loadApp: true,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    await Database.from('events').delete()
  }
}
