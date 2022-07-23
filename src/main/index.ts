'use strict'

import { app } from 'electron'
import win from './router'
import './events'
// import './database'
// import knex from './database'
// const cost = await knex('cost')
// console.log('=== cost ===', cost)

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

app.disableHardwareAcceleration()

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('second-instance', () => {
  win.open('main')
})

app.on('ready', () => {
  win.open('main')
})

const isDev = process.env.NODE_ENV !== 'production'
if (isDev) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}
