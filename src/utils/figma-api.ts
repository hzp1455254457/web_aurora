/**
 * Figma API 工具函数
 * 封装 Figma API 调用相关功能
 */

const FIGMA_API_BASE = 'https://api.figma.com/v1'

/**
 * 获取 Figma API Token
 * 优先从环境变量获取，如果没有则返回 null
 */
export function getFigmaApiToken(): string | null {
  return import.meta.env.VITE_FIGMA_API_TOKEN || null
}

/**
 * 从 Figma URL 中提取 fileKey 和 nodeId
 * @param url Figma 设计链接
 * @returns { fileKey: string, nodeId: string | null }
 */
export function parseFigmaUrl(url: string): { fileKey: string; nodeId: string | null } {
  try {
    const urlObj = new URL(url)
    
    // 提取 fileKey（URL 路径中的设计文件 ID）
    const pathMatch = urlObj.pathname.match(/\/design\/([^\/]+)/)
    const fileKey = pathMatch ? pathMatch[1] : ''

    // 提取 nodeId（查询参数中的 node-id）
    const nodeIdParam = urlObj.searchParams.get('node-id')
    // 将 node-id 格式从 "3208-3037" 转换为 "3208:3037"
    const nodeId = nodeIdParam ? nodeIdParam.replace(/-/g, ':') : null

    return { fileKey, nodeId }
  } catch (error) {
    console.error('解析 Figma URL 失败:', error)
    return { fileKey: '', nodeId: null }
  }
}

/**
 * 调用 Figma API
 * @param endpoint API 端点
 * @param options 请求选项
 */
export async function callFigmaApi(
  endpoint: string,
  options: RequestInit = {}
): Promise<any> {
  const token = getFigmaApiToken()
  
  if (!token) {
    throw new Error('Figma API Token 未配置')
  }

  const response = await fetch(`${FIGMA_API_BASE}${endpoint}`, {
    ...options,
    headers: {
      'X-Figma-Token': token,
      'Content-Type': 'application/json',
      ...options.headers,
    },
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(`Figma API 错误: ${response.status} - ${errorText}`)
  }

  return response.json()
}

/**
 * 获取文件数据
 * @param fileKey 文件 Key
 */
export async function getFileData(fileKey: string): Promise<any> {
  return callFigmaApi(`/files/${fileKey}`)
}

/**
 * 获取节点数据
 * @param fileKey 文件 Key
 * @param nodeIds 节点 ID 数组
 */
export async function getNodesData(fileKey: string, nodeIds: string[]): Promise<any> {
  const ids = nodeIds.join(',')
  return callFigmaApi(`/files/${fileKey}/nodes?ids=${ids}`)
}

/**
 * 获取图片
 * @param fileKey 文件 Key
 * @param nodeIds 节点 ID 数组
 * @param options 图片选项（scale, format 等）
 */
export async function getImages(
  fileKey: string,
  nodeIds: string[],
  options: { scale?: number; format?: string } = {}
): Promise<any> {
  const ids = nodeIds.join(',')
  const params = new URLSearchParams({
    ids,
    ...(options.scale && { scale: options.scale.toString() }),
    ...(options.format && { format: options.format }),
  })
  
  return callFigmaApi(`/images/${fileKey}?${params.toString()}`)
}
