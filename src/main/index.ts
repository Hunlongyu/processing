import { join } from 'path'
import { app, BrowserWindow } from 'electron'

const preload = join(__dirname, '../preload/index.js')

process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 'true'

app.whenReady().then(() => {
  const win = new BrowserWindow({
    webPreferences: {
      preload,
      nodeIntegration: true,
      contextIsolation: false
    }
  })
  if (app.isPackaged) {
    const path = join(__dirname, '../')
    const filePath = join(path, 'index.html')
    win.loadFile(filePath)
  } else {
    win.loadURL('http://127.0.0.1:5173')
  }
})
