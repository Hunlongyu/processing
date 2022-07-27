<template>
  <n-config-provider :theme-overrides="themeOverrides">
    <n-message-provider>
      <Home />
    </n-message-provider>
  </n-config-provider>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron'
import { GlobalThemeOverrides } from 'naive-ui'

console.log('=== main ===')

const themeOverrides: GlobalThemeOverrides = {
  common: {}
}

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
html,
body,
#app,
.n-config-provider {
  height: 100%;
}
</style>
