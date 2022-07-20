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
  mini(name: string) {
    if (name && this.windows[name]) {
      this.windows[name].minimize()
    } else {
      const win = BrowserWindow.getFocusedWindow()
      if (win) win.minimize()
    }
  }

  // 【窗口】 最大化
  max(name: string) {
    if (name && this.windows[name]) {
      this.windows[name].isMaximized() ? this.windows[name].unmaximize() : this.windows[name].maximize()
    } else {
      const win = BrowserWindow.getFocusedWindow()
      if (win) win.isMaximized() ? win.unmaximize() : win.maximize()
    }
  }

  // 【窗口】 关闭
  close(name: string) {
    if (name && this.windows[name]) {
      this.windows[name].close()
    } else {
      const win = BrowserWindow.getFocusedWindow()
      if (win) win.close()
    }
  }

  // 【窗口】 获取单个窗口
  get(name: string) {
    if (name) {
      return this.windows[name]
    } else {
      return BrowserWindow.getFocusedWindow()
    }
  }

  // 【窗口】 获取所有窗口
  getAll() {
    return this.windows
  }

  async open(name: string, config?: BrowserWindowConstructorOptions) {
    if (this.windows[name]) {
      if (this.windows[name].isMinimized()) this.windows[name].restore()
      this.windows[name].focus()
      return false
    }

    const win = (this.windows[name] = await createWindow(name, config))
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
  closeAll() {
    BrowserWindow.getAllWindows().forEach((win) => {
      win.close()
    })
    process.exit(0)
  }
}

// 创建新的窗口
async function createWindow(name: string, config?: BrowserWindowConstructorOptions) {
  const _config = Object.assign(WinConfig.default, WinConfig[name], config)
  const win = new BrowserWindow(_config)

  const path = name === 'main' ? '../index.html' : `../pages/${name}.html`

  if (app.isPackaged) {
    const filePath = join(__dirname, path)
    win.loadFile(filePath)
  } else {
    const url = name === 'main' ? 'index.html' : `pages/${name}.html`
    await win.loadURL(`http://127.0.0.1:5173/${url}`)
    win.webContents.openDevTools()
  }

  win.on('closed', () => {
    win.destroy()
  })

  return win
}

export default new Router()
