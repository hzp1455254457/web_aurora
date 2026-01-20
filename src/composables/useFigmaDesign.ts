/**
 * Figma 设计数据获取和管理的组合式函数
 * 使用 Figma MCP 工具获取设计数据并管理设计资源
 */

import { ref } from 'vue'
import type { FigmaDesignData } from '@/types/figma'

export function useFigmaDesign() {
  const designData = ref<FigmaDesignData | null>(null)
  const loading = ref(false)
  const error = ref<string | null>(null)

  /**
   * 从 Figma MCP 获取设计数据
   * 注意：此函数需要在支持 MCP 的环境中调用（如 Cursor AI）
   * 在浏览器环境中，需要通过后端代理或直接使用 REST API
   * 
   * @param fileKey Figma 文件 Key
   * @param nodeId 节点 ID（格式：3208:3037）
   */
  const fetchDesign = async (fileKey: string, nodeId?: string): Promise<FigmaDesignData | null> => {
    loading.value = true
    error.value = null

    try {
      // 在浏览器环境中，需要通过后端 API 或直接使用 REST API
      // 这里提供一个兼容方案：如果配置了 API Token，使用 REST API
      // 否则提示使用 MCP 工具
      
      const apiToken = import.meta.env.VITE_FIGMA_API_TOKEN

      if (!apiToken) {
        // 如果没有配置 Token，提示使用 MCP 工具
        console.warn('未配置 Figma API Token，请使用 Figma MCP 工具获取设计数据')
        throw new Error(
          '请使用 Figma MCP 工具获取设计数据，或在 .env 文件中配置 VITE_FIGMA_API_TOKEN'
        )
      }

      // 使用 REST API 作为备选方案
      const endpoint = nodeId
        ? `https://api.figma.com/v1/files/${fileKey}/nodes?ids=${nodeId}`
        : `https://api.figma.com/v1/files/${fileKey}`

      const response = await fetch(endpoint, {
        headers: {
          'X-Figma-Token': apiToken,
        },
      })

      if (!response.ok) {
        throw new Error(`Figma API 请求失败: ${response.status} ${response.statusText}`)
      }

      const data = await response.json()
      designData.value = {
        fileKey,
        nodeId: nodeId || '',
        file: nodeId ? undefined : data.document,
        nodes: nodeId ? data.nodes : undefined,
        ...data,
      }

      return designData.value
    } catch (err) {
      error.value = err instanceof Error ? err.message : '未知错误'
      console.error('获取 Figma 设计失败:', err)
      return null
    } finally {
      loading.value = false
    }
  }

  /**
   * 使用 Figma MCP 工具获取设计数据（在 Cursor AI 环境中）
   * 此方法由 AI 助手通过 MCP 工具调用
   */
  const fetchDesignViaMCP = async (fileKey: string, nodeId?: string): Promise<FigmaDesignData | null> => {
    // 这个方法在实际调用时会被 AI 助手通过 MCP 工具替换
    // 实际实现：使用 mcp_Framelink_MCP_for_Figma_get_figma_data
    return fetchDesign(fileKey, nodeId)
  }

  /**
   * 下载并加载设计资源（图片等）
   * @param data 设计数据
   */
  const loadDesignAssets = async (data: FigmaDesignData): Promise<void> => {
    if (!data.images || data.images.length === 0) {
      return
    }

    try {
      // TODO: 实现图片下载逻辑
      // 将 Figma 图片下载到 src/assets/figma/ 目录
      console.log('加载设计资源:', data.images)
    } catch (err) {
      console.error('加载设计资源失败:', err)
    }
  }

  /**
   * 导出设计数据为组件
   * 将 Figma 设计转换为 Vue 组件代码
   */
  const exportToComponent = (data: FigmaDesignData): string => {
    // TODO: 实现设计到组件的转换逻辑
    // 根据 Figma 设计数据生成 Vue 组件代码
    return ''
  }

  return {
    designData,
    loading,
    error,
    fetchDesign,
    fetchDesignViaMCP,
    loadDesignAssets,
    exportToComponent,
  }
}
