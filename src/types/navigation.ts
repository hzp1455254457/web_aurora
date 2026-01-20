/**
 * 导航相关类型定义
 */

export interface NavItem {
  path: string
  label: string
  active?: boolean
}

export interface NavigationState {
  currentPath: string
  items: NavItem[]
}
