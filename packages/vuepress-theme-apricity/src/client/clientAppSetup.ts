import { computed, provide } from 'vue'
import { defineClientAppSetup, usePageFrontmatter } from '@vuepress/client'
import {
  resolveSidebarItems,
  sidebarItemsSymbol,
  useThemeLocaleData,
} from './composables'
import type { ApricityThemeNormalPageFrontmatter } from '../shared'

export default defineClientAppSetup(() => {
  // we need to access sidebar items in multiple components
  // so we make it global computed
  const themeLocale = useThemeLocaleData()
  const frontmatter = usePageFrontmatter<ApricityThemeNormalPageFrontmatter>()
  const sidebarItems = computed(() =>
    resolveSidebarItems(frontmatter.value, themeLocale.value)
  )
  provide(sidebarItemsSymbol, sidebarItems)
})
