import {
  useThemeData as _useThemeData,
  useThemeLocaleData as _useThemeLocaleData,
} from '@vuepress/plugin-theme-data/lib/client'
import type {
  ThemeDataRef,
  ThemeLocaleDataRef,
} from '@vuepress/plugin-theme-data/lib/client'
import type { ApricityThemeData } from '../../shared'

export const useThemeData = (): ThemeDataRef<ApricityThemeData> =>
  _useThemeData<ApricityThemeData>()
export const useThemeLocaleData = (): ThemeLocaleDataRef<ApricityThemeData> =>
  _useThemeLocaleData<ApricityThemeData>()
