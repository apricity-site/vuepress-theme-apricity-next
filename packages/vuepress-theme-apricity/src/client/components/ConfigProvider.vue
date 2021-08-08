<template>
  <NConfigProvider abstract :theme-overrides="themeOverrides">
    <slot />
  </NConfigProvider>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { NConfigProvider, GlobalThemeOverrides } from 'naive-ui'

export default defineComponent({
  name: 'ConfigProvider',
  components: {
    NConfigProvider,
  },
  setup() {
    const themeOverrides = computed<GlobalThemeOverrides>(() => {
      return {
        common: {
          primaryColor: '#2c87fc',
        },
        Button: {
          // textColor: '#FF0000',
        },
        Select: {
          peers: {
            InternalSelection: {
              // textColor: '#FF0000',
            },
          },
        },
        Menu: {
          borderRadius: '1.5rem',
        },
      }
    })
    return {
      themeOverrides,
    }
  },
})
</script>
