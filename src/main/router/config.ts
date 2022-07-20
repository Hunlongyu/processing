import path from 'path'
import { BrowserWindowConstructorOptions } from 'electron'

const isDevelopment = process.env.NODE_ENV !== 'production'

interface BWConfig {
  [type: string]: BrowserWindowConstructorOptions
}

const config: BWConfig = {
  default: {
    webPreferences: {
      webSecurity: false,
      contextIsolation: true,
      preload: path.join(__dirname, '../preload/index.js'),
      nodeIntegration: false
    }
  },
  main: {
    frame: true,
    width: isDevelopment ? 1800 : 1600,
    height: 900,
    minWidth: 1600,
    minHeight: 900,
    autoHideMenuBar: true
  },
  about: {
    frame: true,
    width: isDevelopment ? 1180 : 580,
    height: 400,
    resizable: false,
    autoHideMenuBar: true
  },
  print: {
    frame: false,
    width: isDevelopment ? 1680 : 800,
    height: 1000,
    resizable: false
  }
}

export default config
