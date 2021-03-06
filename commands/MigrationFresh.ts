import { BaseCommand } from '@adonisjs/core/build/standalone'
import execa from 'execa'

export default class MigrationFresh extends BaseCommand {
  /**
   * Command name is used to run the command
   */
  public static commandName = 'migration:fresh'

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
    loadApp: false,

    /**
     * Set the following value to true, if you want this command to keep running until
     * you manually decide to exit the process. Don't forget to call
     * `node ace generate:manifest` afterwards.
     */
    stayAlive: false,
  }

  public async run() {
    await execa.node('ace', ['migration:rollback'])
    this.logger.info('Rollback all tables')
    await execa.node('ace', ['migration:run'])
    this.logger.info('Migrated all tables')
  }
}
