import { ipcMain } from 'electron'
import router from '../router'

ipcMain.handle('event.win.open', (e, name: string) => {
  router.open(name)
})

ipcMain.handle('event.win.handle', async (event, handle: 'mini' | 'max' | 'close' | 'closeAll', name?: string) => {
  router[handle](name)
})
