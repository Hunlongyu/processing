import { BrowserWindowConstructorOptions } from 'electron'

const isDev = process.env.NODE_ENV !== 'production'

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
    width: isDev ? 1800 : 1600,
    height: 900,
    minWidth: 1600,
    minHeight: 900,
    autoHideMenuBar: true
  },
  about: {
    frame: true,
    width: isDev ? 1180 : 580,
    height: 400,
    resizable: !!isDev,
    autoHideMenuBar: true
  },
  print: {
    frame: true,
    width: isDev ? 1680 : 800,
    height: 900,
    resizable: !!isDev,
    autoHideMenuBar: true
  }
}

export default config
