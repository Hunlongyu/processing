import { app, BrowserWindowConstructorOptions } from 'electron'

interface BWConfig {
  [type: string]: BrowserWindowConstructorOptions
}

const config: BWConfig = {
  default: {
    webPreferences: {
      webSecurity: false,
      contextIsolation: false,
      nodeIntegration: true
    }
  },
  main: {
    frame: true,
    width: app.isPackaged ? 1600 : 1800,
    height: 900,
    minWidth: 1600,
    minHeight: 900,
    autoHideMenuBar: true
  },
  about: {
    frame: true,
    width: app.isPackaged ? 580 : 1600,
    height: 400,
    minWidth: 580,
    minHeight: 400,
    resizable: true,
    autoHideMenuBar: true
  },
  print: {
    frame: true,
    width: app.isPackaged ? 800 : 1600,
    height: 900,
    minWidth: 800,
    minHeight: 900,
    resizable: true,
    autoHideMenuBar: true
  }
}

export default config
