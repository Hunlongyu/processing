<template>
  <n-config-provider>
    <n-message-provider>
      <Home />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron'

console.log('=== main ===')

function openWin(win: string) {
  ipcRenderer.invoke('event.win.open', win)
}

onMounted(() => {
  ipcRenderer.on('argv', (e, msg) => {
    console.log('=== msg ===', msg)
  })
})
</script>

<style lang="scss">
#app {
  color: #000;
}
</style>
