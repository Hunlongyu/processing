import { ipcMain } from 'electron'
import win from '../router'

ipcMain.handle('event.win.open', (e, w: string) => {
  console.log('=== e ===', w)
  win.open(w)
})
