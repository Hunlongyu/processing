<template>
  <div>about</div>
  <button @click="openWin">open main</button>
</template>

<script setup lang="ts">
import { ipcRenderer } from 'electron'

console.log('=== about ===')
function openWin() {
  ipcRenderer.invoke('event.win.open', 'main')
}
</script>

<style lang="scss">
#app {
  color: #000;
}
</style>
