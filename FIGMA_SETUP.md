# Figma 集成配置指南

本文档说明如何配置 Figma API 以获取设计数据并生成前端页面。

## 📋 前置要求

1. **Figma 账号**：需要有一个 Figma 账号
2. **Figma API Token**：需要获取 Figma Personal Access Token

## 🔑 获取 Figma API Token

1. 访问 [Figma Account Settings](https://www.figma.com/settings)
2. 滚动到 **Personal access tokens** 部分
3. 点击 **Create a new personal access token**
4. 输入 Token 名称（如：`web_aurora_dev`）
5. 复制生成的 Token（只显示一次，请妥善保存）

## ⚙️ 配置环境变量

1. 在项目根目录创建 `.env` 文件（如果不存在）
2. 添加 Figma API Token：

```env
VITE_FIGMA_API_TOKEN=your_figma_api_token_here
```

3. 确保 `.env` 文件已添加到 `.gitignore`（不要提交到 Git）

## 📦 项目结构

Figma 集成相关的文件结构：

```
src/
├── views/
│   └── Anora.vue              # Anora 页面组件
├── composables/
│   └── useFigmaDesign.ts      # Figma 设计数据管理
├── utils/
│   └── figma-api.ts           # Figma API 工具函数
├── types/
│   └── figma.ts               # Figma 类型定义
└── assets/
    └── figma/                  # Figma 设计资源（图片等）
```

## 🚀 使用方法

### 1. 配置 Token

在 `.env` 文件中设置 `VITE_FIGMA_API_TOKEN`

### 2. 使用 Figma 设计

在组件中使用 `useFigmaDesign` 组合式函数：

```vue
<script setup lang="ts">
import { useFigmaDesign } from '@/composables/useFigmaDesign'

const { fetchDesign, designData, loading } = useFigmaDesign()

// 获取设计数据
await fetchDesign('296WIAxav2gKg3MukBtrgY', '3208:3037')
</script>
```

### 3. 解析 Figma URL

使用工具函数解析 Figma 链接：

```typescript
import { parseFigmaUrl } from '@/utils/figma-api'

const url = 'https://www.figma.com/design/296WIAxav2gKg3MukBtrgY/Anora?node-id=3208-3037'
const { fileKey, nodeId } = parseFigmaUrl(url)
// fileKey: '296WIAxav2gKg3MukBtrgY'
// nodeId: '3208:3037'
```

## 🔗 Figma 设计链接

当前项目使用的 Figma 设计：

- **文件**: Anora
- **链接**: https://www.figma.com/design/296WIAxav2gKg3MukBtrgY/Anora?node-id=3208-3037
- **File Key**: `296WIAxav2gKg3MukBtrgY`
- **Node ID**: `3208:3037`

## 📝 注意事项

1. **Token 安全**：
   - 不要将 Token 提交到 Git
   - 使用 `.env` 文件管理环境变量
   - 生产环境使用安全的密钥管理服务

2. **API 限制**：
   - Figma API 有速率限制
   - 建议缓存设计数据，避免频繁请求

3. **权限要求**：
   - 确保 Token 有访问目标设计文件的权限
   - 如果设计文件是私有的，需要确保 Token 所属账号有访问权限

## 🐛 故障排查

### 问题：403 Forbidden

**原因**：Token 未配置或无效

**解决**：
1. 检查 `.env` 文件中的 `VITE_FIGMA_API_TOKEN` 是否正确
2. 确认 Token 是否有效（未过期）
3. 重启开发服务器（`npm run dev`）

### 问题：401 Unauthorized

**原因**：Token 无效或已过期

**解决**：
1. 重新生成 Figma API Token
2. 更新 `.env` 文件中的 Token
3. 重启开发服务器

### 问题：404 Not Found

**原因**：File Key 或 Node ID 错误

**解决**：
1. 检查 Figma 链接是否正确
2. 确认设计文件是否存在且可访问
3. 使用 `parseFigmaUrl` 函数验证 URL 解析结果

## 📚 参考文档

- [Figma API 文档](https://www.figma.com/developers/api)
- [Figma MCP Server](https://developers.figma.com/docs/figma-mcp-server/)
- [Vite 环境变量](https://vitejs.dev/guide/env-and-mode.html)
