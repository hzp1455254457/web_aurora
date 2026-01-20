# Figma MCP 使用指南

本文档说明如何在 Cursor 中使用 Figma MCP 工具导入设计并生成前端页面。

## 🎯 使用 Figma MCP 导入设计

### 方法一：通过 AI 助手使用 MCP 工具

在 Cursor 中，可以直接请求 AI 助手使用 Figma MCP 工具获取设计数据：

```
请使用 Figma MCP 工具获取设计：
- File Key: 296WIAxav2gKg3MukBtrgY
- Node ID: 3208:3037
- 然后根据设计数据生成 Vue 组件
```

AI 助手会自动调用 `mcp_Framelink_MCP_for_Figma_get_figma_data` 工具获取设计数据。

### 方法二：手动配置 API Token（备选方案）

如果 MCP 工具无法使用，可以配置 Figma API Token：

1. 获取 Figma API Token：
   - 访问 https://www.figma.com/settings
   - 创建 Personal Access Token

2. 创建 `.env` 文件：
   ```env
   VITE_FIGMA_API_TOKEN=your_token_here
   ```

3. 重启开发服务器

## 📋 当前设计信息

- **Figma 链接**: https://www.figma.com/design/296WIAxav2gKg3MukBtrgY/Anora?node-id=3208-3037
- **File Key**: `296WIAxav2gKg3MukBtrgY`
- **Node ID**: `3208:3037` (在 URL 中是 `3208-3037`，需要转换为 `3208:3037`)

## 🔧 MCP 工具说明

Figma MCP 工具提供以下功能：

1. **获取设计数据** (`get_figma_data`)
   - 获取 Figma 文件的完整设计数据
   - 包括布局、组件、样式等信息

2. **下载图片资源** (`download_figma_images`)
   - 下载设计中的图片和图标
   - 自动保存到项目资源目录

## 💡 使用示例

### 在 Cursor 中请求 AI 助手

```
请使用 Figma MCP 工具：
1. 获取 File Key: 296WIAxav2gKg3MukBtrgY, Node ID: 3208:3037 的设计数据
2. 分析设计结构
3. 生成对应的 Vue 3 组件代码
4. 下载所需的图片资源到 src/assets/figma/
```

AI 助手会：
1. 调用 MCP 工具获取设计数据
2. 分析设计结构（布局、组件、样式等）
3. 生成符合项目规范的 Vue 组件
4. 下载图片资源
5. 创建必要的类型定义

## ⚠️ 注意事项

1. **权限要求**：
   - 确保 Figma 文件是可访问的
   - 如果文件是私有的，需要确保 MCP 配置有访问权限

2. **MCP 配置**：
   - 确保已按照官方方式配置 Figma MCP
   - 如果遇到 403 错误，检查 MCP 配置和权限

3. **设计数据格式**：
   - MCP 工具返回的数据格式可能与 REST API 略有不同
   - 代码已做兼容处理

## 🚀 下一步

配置好 Figma MCP 后，可以直接请求 AI 助手：

```
使用 Figma MCP 导入设计并生成 Anora 页面组件
```

AI 助手会自动完成整个流程。
