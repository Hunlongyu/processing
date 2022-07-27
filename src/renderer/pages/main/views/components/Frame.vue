<template>
  <n-space justify="space-between" class="window-frame">
    <n-space>
      <n-dropdown :options="menuList.file" placement="bottom-start" trigger="hover" @select="hanleMenuClick">
        <n-button quaternary>File</n-button>
      </n-dropdown>
      <n-dropdown :options="menuList.edit" placement="bottom-start" trigger="hover" @select="hanleMenuClick">
        <n-button quaternary>Edit</n-button>
      </n-dropdown>
      <n-dropdown :options="menuList.processing" placement="bottom-start" trigger="hover" @select="hanleMenuClick">
        <n-button quaternary>Processing</n-button>
      </n-dropdown>
      <n-dropdown :options="menuList.view" placement="bottom-start" trigger="hover" @select="hanleMenuClick">
        <n-button quaternary>View</n-button>
      </n-dropdown>
      <n-dropdown :options="menuList.preferences" placement="bottom-start" trigger="hover" @select="hanleMenuClick">
        <n-button quaternary>Preferences</n-button>
      </n-dropdown>
    </n-space>
    <n-space>
      <n-button quaternary type="primary" @click="handleWin('mini')">
        <n-icon size="20">-</n-icon>
      </n-button>
      <n-button quaternary type="primary" @click="handleWin('max')">
        <n-icon size="20">+</n-icon>
      </n-button>
      <n-button quaternary type="error" @click="handleWin('close')">
        <n-icon size="20">x</n-icon>
      </n-button>
    </n-space>
  </n-space>
</template>
<script lang="ts" setup>
import { ipcRenderer } from 'electron'
import { menuList } from './menuList'

function hanleMenuClick() {}

// e: mini | max | close | closeAll
async function handleWin(e: string, name?: string) {
  await ipcRenderer.invoke('event.win.handle', e, name)
}
</script>
<style lang="scss" scoped>
.window-frame {
  -webkit-app-region: drag;
  button {
    -webkit-app-region: no-drag;
  }
}
</style>
