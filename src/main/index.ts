'use strict'

import { app, BrowserWindow } from 'electron'
import installExtension, { VUEJS3_DEVTOOLS } from 'electron-devtools-installer'
import win from './router'
// import './events'

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

app.whenReady().then(async () => {
  if (app.isPackaged) {
    try {
      await installExtension(VUEJS3_DEVTOOLS)
    } catch (err) {
      console.log('=== err ===', err)
    }
  }
  win.open('about')
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
