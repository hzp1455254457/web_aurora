/**
 * Figma MCP 工具辅助函数
 * 用于在 Cursor AI 环境中通过 MCP 工具获取 Figma 设计数据
 * 
 * 注意：这些函数需要在 Cursor AI 环境中通过 MCP 工具调用
 * 在浏览器环境中无法直接使用，需要通过后端代理
 */

/**
 * 通过 Figma MCP 获取设计数据的说明
 * 
 * 在 Cursor 中，AI 助手可以使用以下 MCP 工具：
 * 1. mcp_Framelink_MCP_for_Figma_get_figma_data - 获取设计数据
 * 2. mcp_Framelink_MCP_for_Figma_download_figma_images - 下载图片资源
 * 
 * 使用示例（在 Cursor 中请求 AI 助手）：
 * "请使用 Figma MCP 工具获取 File Key: 296WIAxav2gKg3MukBtrgY, Node ID: 3208:3037 的设计数据"
 */

export interface FigmaMCPConfig {
  fileKey: string
  nodeId?: string
  depth?: number
}

/**
 * 解析 Figma URL 为 MCP 配置
 */
export function parseFigmaUrlForMCP(url: string): FigmaMCPConfig {
  try {
    const urlObj = new URL(url)
    
    // 提取 fileKey
    const pathMatch = urlObj.pathname.match(/\/design\/([^\/]+)/)
    const fileKey = pathMatch ? pathMatch[1] : ''

    // 提取 nodeId（从查询参数）
    const nodeIdParam = urlObj.searchParams.get('node-id')
    // 将 "3208-3037" 转换为 "3208:3037"
    const nodeId = nodeIdParam ? nodeIdParam.replace(/-/g, ':') : undefined

    return {
      fileKey,
      nodeId,
      depth: 2, // 默认深度
    }
  } catch (error) {
    console.error('解析 Figma URL 失败:', error)
    return { fileKey: '' }
  }
}

/**
 * 生成 MCP 工具调用说明
 */
export function generateMCPInstructions(config: FigmaMCPConfig): string {
  const { fileKey, nodeId, depth = 2 } = config
  
  if (!fileKey) {
    return '错误：无法解析 Figma URL'
  }

  let instructions = `请使用 Figma MCP 工具获取设计数据：\n`
  instructions += `- File Key: ${fileKey}\n`
  
  if (nodeId) {
    instructions += `- Node ID: ${nodeId}\n`
  }
  
  if (depth) {
    instructions += `- Depth: ${depth}\n`
  }
  
  instructions += `\n然后根据获取到的设计数据生成 Vue 3 组件代码。`
  
  return instructions
}

/**
 * 当前项目的 Figma 设计配置
 */
export const ANORA_FIGMA_CONFIG: FigmaMCPConfig = {
  fileKey: '296WIAxav2gKg3MukBtrgY',
  nodeId: '3208:3037',
  depth: 2,
}

/**
 * 生成 Anora 设计的 MCP 调用说明
 */
export function getAnoraMCPInstructions(): string {
  return generateMCPInstructions(ANORA_FIGMA_CONFIG)
}
