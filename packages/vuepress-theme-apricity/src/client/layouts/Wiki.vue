<template>
  <ConfigProvider>
    <div :style="wrapperStyle" class="wiki-wrapper flex justify-center py-8">
      <div
        :style="{ borderRadius: '0.8rem' }"
        class="container frosted-glass min-h-full flex flex-col md:flex-row"
      >
        <nav class="flex flex-col items-center w-48">
          <span>W</span>
          <span>Personal Wiki</span>
          <NMenu :default-expand-all="true" :options="menuOptions" />
        </nav>
        <section class="flex-grow p-4" :style="{ backgroundColor: '#ffffff' }">
          <div class="category-card">
            <div class="category-card-header"></div>
            <ProjectCard />
          </div>
        </section>
      </div>
    </div>
  </ConfigProvider>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { withBase } from '@vuepress/client'
import { useThemeData } from '../composables'
import { NButton, NMenu } from 'naive-ui'
import ConfigProvider from '../components/ConfigProvider.vue'
import ProjectCard from '../components/wiki/ProjectCard.vue'

const menuOptions = [
  {
    label: '人物',
    key: 'people',
  },
  {
    label: '饮品',
    key: 'beverage',
  },
  {
    label: '食物',
    key: 'food',
  },
  {
    label: '过去增多，未来减少',
    key: 'the-past-increases-the-future-recedes',
  },
]
export default defineComponent({
  name: 'Wiki',
  components: {
    ConfigProvider,
    NButton,
    NMenu,
    ProjectCard,
  },
  setup() {
    const wrapperStyle = {
      backgroundImage: `url(${withBase('/wiki/index-1.jpg')})`,
    }
    const themeData = useThemeData()
    const workspaces = [...themeData.value.wiki]
    return {
      wrapperStyle,
      workspaces,
      menuOptions,
    }
  },
})
</script>
