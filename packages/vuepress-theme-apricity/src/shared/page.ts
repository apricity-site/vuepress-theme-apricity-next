import type { GitPluginPageData } from '@vuepress/plugin-git'
import type { NavLink, SidebarConfig } from './nav'

export interface ApricityThemePageData extends GitPluginPageData {
  filePathRelative: string
}

export interface ApricityThemePageFrontmatter {
  home?: boolean
  navbar?: boolean
  pageClass?: string
  category?: string
  space?: string
  createTime?: Date
}

export interface ApricityThemeHomePageFrontmatter
  extends ApricityThemePageFrontmatter {
  home: true
  heroImage?: string
  heroAlt?: string
  heroText?: string | null
  tagline?: string | null
  actions?: {
    text: string
    link: string
    type?: 'primary' | 'secondary'
  }[]
  features?: {
    title: string
    details: string
  }[]
  footer?: string
  footerHtml?: boolean
}

export interface ApricityThemeNormalPageFrontmatter
  extends ApricityThemePageFrontmatter {
  home?: false
  editLink?: boolean
  lastUpdated?: boolean
  contributors?: boolean
  sidebar?: 'auto' | false | SidebarConfig
  sidebarDepth?: number
  prev?: string | NavLink
  next?: string | NavLink
}
