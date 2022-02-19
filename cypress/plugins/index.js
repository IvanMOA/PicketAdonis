/// <reference types="cypress" />
const { spawn } = require('child_process')
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('task', {
    'db:seed': async (scenarioName) => {
      return new Promise((resolve, reject) => {
        const seedProcess = spawn('node', ['ace', 'db:seed'])
        seedProcess.stdout.on('data', (data) => {
          console.log(`stdout: ${data}`)
        })
        seedProcess.stderr.on('data', (data) => {
          console.error(`db:seed: ${data}`)
        })
        seedProcess.on('close', (code) => {
          if (code === 0) {
            resolve(true)
          } else {
            reject(`db:seed child process exited with code ${code}`)
          }
        })
      })
    },
    'db:reset': async (scenarioName) => {
      return new Promise((resolve, reject) => {
        const seedProcess = spawn('node', ['ace', 'db:reset'])
        seedProcess.stdout.on('data', (data) => {
          console.log(`stdout: ${data}`)
        })
        seedProcess.stderr.on('data', (data) => {
          console.error(`db:seed: ${data}`)
        })
        seedProcess.on('close', (code) => {
          if (code === 0) {
            resolve(true)
          } else {
            reject(`db:seed child process exited with code ${code}`)
          }
        })
      })
    },
  })
}
