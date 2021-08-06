import type { ActiveHeaderLinksPluginOptions } from '@vuepress/plugin-active-header-links'
import type { ApricityThemePluginsOptions } from '../../shared'

/**
 * Resolve options for @vuepress/plugin-active-header-links
 */
export const resolveActiveHeaderLinksPluginOptions = (
  themePlugins: ApricityThemePluginsOptions
): ActiveHeaderLinksPluginOptions | boolean => {
  if (themePlugins?.activeHeaderLinks === false) {
    return false
  }

  return {
    headerLinkSelector: '.sidebar-link',
    headerAnchorSelector: '.header-anchor',
  }
}
