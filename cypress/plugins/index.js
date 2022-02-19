/// <reference types="cypress" />
const { spawn } = require('child_process')
const { handleChildProcessStream } = require('./handleChildProcessStream')
/**
 * @type {Cypress.PluginConfig}
 */
// eslint-disable-next-line no-unused-vars
module.exports = (on, config) => {
  on('task', {
    'db:seed': async (scenarioName) => {
      return new Promise((resolve, reject) => {
        const seedProcess = spawn('node', ['ace', 'db:seed'])
        handleChildProcessStream(seedProcess, 'db:seed', resolve, reject)
      })
    },
    'db:reset': async (scenarioName) => {
      return new Promise((resolve, reject) => {
        const seedProcess = spawn('node', ['ace', 'db:reset'])
        handleChildProcessStream(seedProcess, 'db:reset', resolve, reject)
      })
    },
  })
}
