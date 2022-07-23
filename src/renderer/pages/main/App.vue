<template>
  <div>app</div>
  <div><button @click="openWin('about')">open about window</button></div>
  <div><button @click="openWin('print')">open print window</button></div>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron'

console.log('=== main ===')

function openWin(win: string) {
  ipcRenderer.invoke('event.win.open', win)
}
</script>

<style lang="scss">
#app {
  color: #000;
}
</style>
