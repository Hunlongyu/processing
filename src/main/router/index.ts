import { app, BrowserWindow, BrowserWindowConstructorOptions } from 'electron'
import { join } from 'path'
import WinConfig from './config'

interface WinType {
  [type: string]: BrowserWindow
}

class Router {
  windows: WinType

  constructor() {
    this.windows = {}
  }

  // 【窗口】 最小化
  public mini(name?: string): void {
    if (name && this.windows[name]) {
      this.windows[name].minimize()
    } else {
      const win = BrowserWindow.getFocusedWindow()
      if (win) win.minimize()
    }
  }

  // 【窗口】 最大化
  public max(name?: string): void {
    if (name && this.windows[name]) {
      this.windows[name].isMaximized() ? this.windows[name].unmaximize() : this.windows[name].maximize()
    } else {
      const win = BrowserWindow.getFocusedWindow()
      if (win) win.isMaximized() ? win.unmaximize() : win.maximize()
    }
  }

  // 【窗口】 关闭
  public close(name?: string): void {
    if (name && this.windows[name]) {
      this.windows[name].close()
    } else {
      const win = BrowserWindow.getFocusedWindow()
      if (win) win.close()
    }
  }

  public async open(name: string, config?: BrowserWindowConstructorOptions): Promise<BrowserWindow> {
    if (this.windows[name]) {
      if (this.windows[name].isMinimized()) this.windows[name].restore()
      this.windows[name].focus()
      return this.windows[name]
    }

    const win = (this.windows[name] = await this.createWindow(name, config))
    win.on('close', () => {
      win && win.hide()
      delete this.windows[name]
      win.destroy()
    })

    win.once('ready-to-show', () => {
      if (!win) return false
      win.show()
    })

    return win
  }

  // 【窗口】 关闭所有
  public closeAll(): void {
    BrowserWindow.getAllWindows().forEach((win) => {
      win.close()
    })
    process.exit(0)
  }

  private async createWindow(name: string, config?: BrowserWindowConstructorOptions): Promise<BrowserWindow> {
    const _config = Object.assign(WinConfig.default, WinConfig[name], config)
    const win = new BrowserWindow(_config)

    if (app.isPackaged) {
      const path = name === 'main' ? '../index.html' : `../index_${name}.html`
      const filePath = join(__dirname, path)
      win.loadFile(filePath)
    } else {
      const url = name === 'main' ? 'index.html' : `index_${name}.html`
      const HOST = process.env.VITE_DEV_SERVER_HOST
      const PORT = process.env.VITE_DEV_SERVER_PORT
      await win.loadURL(`http://${HOST}:${PORT}/${url}`)
      win.webContents.openDevTools()
    }

    win.on('closed', () => {
      win.destroy()
    })

    return win
  }
}

export default new Router()
