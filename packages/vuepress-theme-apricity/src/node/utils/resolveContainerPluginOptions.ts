import type { ContainerPluginOptions } from '@vuepress/plugin-container'
import type {
  ApricityThemePluginsOptions,
  ApricityThemeData,
} from '../../shared'

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For custom containers default title
 */
export const resolveContainerPluginOptions = (
  themePlugins: ApricityThemePluginsOptions,
  localeOptions: ApricityThemeData,
  type: 'tip' | 'warning' | 'danger'
): ContainerPluginOptions | boolean => {
  if (themePlugins?.container?.[type] === false) {
    return false
  }

  const locales = Object.entries(localeOptions.locales || {}).reduce(
    (result, [key, value]) => {
      result[key] = {
        defaultInfo: value?.[type] ?? localeOptions[type],
      }
      return result
    },
    {}
  )

  return {
    type,
    locales,
  }
}

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For details container
 */
export const resolveContainerPluginOptionsForDetails = (
  themePlugins: ApricityThemePluginsOptions
): ContainerPluginOptions | boolean => {
  if (themePlugins?.container?.details === false) {
    return false
  }

  return {
    type: 'details',
    before: (info) =>
      `<details class="custom-container details">${
        info ? `<summary>${info}</summary>` : ''
      }\n`,
    after: () => '</details>\n',
  }
}

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For code-group container
 */
export const resolveContainerPluginOptionsForCodeGroup = (
  themePlugins: ApricityThemePluginsOptions
): ContainerPluginOptions | boolean => {
  if (themePlugins?.container?.codeGroup === false) {
    return false
  }

  return {
    type: 'code-group',
    before: () => `<CodeGroup>\n`,
    after: () => '</CodeGroup>\n',
  }
}

/**
 * Resolve options for @vuepress/plugin-container
 *
 * For code-group-item block
 */
export const resolveContainerPluginOptionsForCodeGroupItem = (
  themePlugins: ApricityThemePluginsOptions
): ContainerPluginOptions | boolean => {
  if (themePlugins?.container?.codeGroupItem === false) {
    return false
  }

  return {
    type: 'code-group-item',
    before: (info) => `<CodeGroupItem title="${info}">\n`,
    after: () => '</CodeGroupItem>\n',
  }
}
