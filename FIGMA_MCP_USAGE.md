# Figma MCP 使用指南

## 🎯 快速开始

在 Cursor 中，直接请求 AI 助手使用 Figma MCP 工具：

```
请使用 Figma MCP 工具获取设计数据并生成 Vue 组件：
- File Key: 296WIAxav2gKg3MukBtrgY
- Node ID: 3208:3037
- 然后根据设计数据生成对应的 Vue 3 组件代码
```

## 📋 当前设计信息

- **Figma 链接**: https://www.figma.com/design/296WIAxav2gKg3MukBtrgY/Anora?node-id=3208-3037
- **File Key**: `296WIAxav2gKg3MukBtrgY`
- **Node ID**: `3208:3037` (URL 中是 `3208-3037`，需要转换为 `3208:3037`)

## 🔧 MCP 工具说明

Figma MCP 提供两个主要工具：

### 1. get_figma_data
获取 Figma 设计数据，包括：
- 布局结构
- 组件信息
- 样式定义
- 文本内容

**参数**：
- `fileKey`: Figma 文件 Key（必需）
- `nodeId`: 节点 ID，格式 `3208:3037`（可选）
- `depth`: 遍历深度（可选，默认 1）

### 2. download_figma_images
下载设计中的图片资源

**参数**：
- `fileKey`: Figma 文件 Key（必需）
- `nodes`: 节点数组，包含 nodeId 和 fileName
- `localPath`: 本地保存路径（相对路径）
- `pngScale`: PNG 缩放比例（可选，默认 2）

## 💡 使用示例

### 示例 1：获取设计数据

在 Cursor 中请求：
```
使用 Figma MCP 工具获取 File Key: 296WIAxav2gKg3MukBtrgY, Node ID: 3208:3037 的设计数据
```

AI 助手会调用：
```typescript
mcp_Framelink_MCP_for_Figma_get_figma_data({
  fileKey: '296WIAxav2gKg3MukBtrgY',
  nodeId: '3208:3037',
  depth: 2
})
```

### 示例 2：下载图片资源

在 Cursor 中请求：
```
使用 Figma MCP 工具下载设计中的图片到 src/assets/figma/
```

AI 助手会调用：
```typescript
mcp_Framelink_MCP_for_Figma_download_figma_images({
  fileKey: '296WIAxav2gKg3MukBtrgY',
  localPath: 'src/assets/figma',
  nodes: [
    {
      nodeId: '3208:3037',
      fileName: 'anora-design.png'
    }
  ],
  pngScale: 2
})
```

### 示例 3：完整流程

在 Cursor 中请求：
```
请使用 Figma MCP 工具：
1. 获取 File Key: 296WIAxav2gKg3MukBtrgY, Node ID: 3208:3037 的设计数据
2. 分析设计结构（布局、组件、样式等）
3. 生成对应的 Vue 3 组件代码到 src/views/Anora.vue
4. 下载所需的图片资源到 src/assets/figma/
5. 根据设计数据更新组件样式
```

## ⚠️ 权限问题排查

如果遇到 403 Forbidden 错误，可能的原因：

1. **Figma 文件权限**
   - 确保文件是公开的，或者
   - 确保你的 Figma 账号有访问权限

2. **MCP 配置**
   - 检查 Figma MCP 是否正确配置
   - 确认是否需要 OAuth 认证

3. **文件访问**
   - 尝试在浏览器中直接访问 Figma 链接
   - 确认链接是否有效

## 🔄 工作流程

1. **获取设计数据** → 使用 `get_figma_data` 工具
2. **分析设计结构** → AI 助手分析布局、组件、样式
3. **生成组件代码** → 根据设计数据生成 Vue 组件
4. **下载资源** → 使用 `download_figma_images` 下载图片
5. **优化代码** → 根据项目规范优化生成的代码

## 📝 注意事项

1. **Node ID 格式**：
   - URL 中：`3208-3037`（使用连字符）
   - MCP 中：`3208:3037`（使用冒号）
   - 需要转换格式

2. **路径格式**：
   - 使用相对路径：`src/assets/figma`
   - 不要使用绝对路径

3. **图片格式**：
   - PNG：用于位图、截图
   - SVG：用于矢量图、图标

## 🚀 下一步

配置好 Figma MCP 后，可以直接在 Cursor 中请求：

```
使用 Figma MCP 导入 Anora 设计并生成前端页面
```

AI 助手会自动完成整个流程。
