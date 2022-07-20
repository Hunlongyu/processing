'use strict'

import { app, BrowserWindow } from 'electron'
import win from './router'
// import './events'
import './database'
// import knex from './database'
// const cost = await knex('cost')
// console.log('=== cost ===', cost)

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'
const isDevelopment = process.env.NODE_ENV !== 'production'

app.disableHardwareAcceleration()

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) win.open('main')
})

app.on('second-instance', () => {
  win.open('main')
})

app.on('ready', () => {
  win.open('main')
})

if (isDevelopment) {
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
