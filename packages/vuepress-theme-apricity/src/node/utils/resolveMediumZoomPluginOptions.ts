import type { MediumZoomPluginOptions } from '@vuepress/plugin-medium-zoom'
import type { ApricityThemePluginsOptions } from '../../shared'

/**
 * Resolve options for @vuepress/plugin-medium-zoom
 */
export const resolveMediumZoomPluginOptions = (
  themePlugins: ApricityThemePluginsOptions
): MediumZoomPluginOptions | boolean => {
  if (themePlugins?.mediumZoom === false) {
    return false
  }

  return {
    selector:
      '.theme-default-content > img, .theme-default-content :not(a) > img',
    zoomOptions: {},
    // should greater than page transition duration
    delay: 400,
  }
}
