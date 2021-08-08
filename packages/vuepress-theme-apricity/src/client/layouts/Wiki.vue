<template>
  <div :style="wrapperStyle" class="wiki-wrapper flex justify-center py-8">
    <div class="container min-h-full flex flex-col md:flex-row">
      <nav class="flex flex-col items-center w-48">
        <span>W</span>
        <span>Personal Wiki</span>
      </nav>
      <section class="flex-grow">project</section>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { withBase } from '@vuepress/client'
import { useThemeData } from '../composables'
export default defineComponent({
  name: 'Wiki',
  setup() {
    const wrapperStyle = {
      backgroundImage: `url(${withBase('/wiki/index-1.jpg')})`,
    }
    const themeData = useThemeData()
    const workspaces = [...themeData.value.wiki]
    console.log(workspaces)
    return {
      wrapperStyle,
      workspaces,
    }
  },
})
</script>
