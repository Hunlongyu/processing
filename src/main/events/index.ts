import { ipcMain } from 'electron'
import win from '../router'

ipcMain.handle('win.open.about', () => {
  win.open('about')
})
