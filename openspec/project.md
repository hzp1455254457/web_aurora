# Project Context

## Purpose
AI数字人前端Web项目，提供数字人交互界面和用户体验。项目专注于构建高性能、现代化的前端应用，支持数字人的实时交互、多媒体展示和用户交互功能。

## Tech Stack
- **Vue 3** (^3.4.21) - 渐进式JavaScript框架，使用Composition API
- **Vite** (^5.2.0) - 下一代前端构建工具，提供快速开发体验
- **TypeScript** (^5.4.5) - 类型安全的JavaScript超集
- **Vue Router** - 路由管理（待添加）
- **Element Plus** - UI组件库（待添加，如需要）
- **Pinia** - 状态管理（待添加，如需要）

## Project Conventions

### Code Style
- 使用TypeScript严格模式
- 遵循Vue 3 Composition API最佳实践
- 组件命名使用PascalCase（如：`UserProfile.vue`）
- 文件命名使用kebab-case（如：`user-profile.ts`）
- 路径别名：`@/` 指向 `src/` 目录
- 保持代码简洁可读，关键逻辑添加注释

### Architecture Patterns
- **组件化设计**：遵循单一职责原则，组件粒度适中
- **Composition API优先**：使用`<script setup>`语法
- **状态管理策略**：评估状态作用域，优先本地状态，必要时使用全局状态管理
- **代码组织**：按功能模块组织，公共逻辑抽取为Composable
- **性能优化**：路由懒加载、组件按需加载、合理使用keep-alive

### Testing Strategy
- 功能测试覆盖核心流程
- 边界情况测试
- 浏览器兼容性验证
- 性能指标检查
- （待完善：单元测试和E2E测试框架）

### Git Workflow
- 主分支：`main` 或 `master`
- 功能分支：`feature/feature-name`
- 提交信息：使用清晰的描述性信息
- 代码审查：重要变更需要审查

## Domain Context
- **AI数字人**：项目核心是AI驱动的数字人交互系统
- **实时交互**：需要支持实时音视频交互、表情动作同步
- **多媒体处理**：涉及音频、视频、3D模型等多媒体内容
- **用户体验**：注重流畅的交互体验和视觉呈现
- **静态托管**：优先使用Vercel/Netlify等静态托管平台快速部署

## Important Constraints
- **性能要求**：首屏加载时间、交互响应速度需满足用户体验要求
- **浏览器兼容**：支持现代浏览器（Chrome、Firefox、Safari、Edge最新版本）
- **静态托管限制**：部署平台的文件大小和构建时间限制
- **类型安全**：严格使用TypeScript，避免使用`any`类型
- **代码体积**：关注打包体积，避免不必要的依赖

## External Dependencies
- **Vercel/Netlify**：静态托管和CI/CD平台
- **CDN服务**：静态资源加速（如需要）
- **AI服务API**：数字人相关的后端API服务（待集成）
- **音视频服务**：实时音视频交互服务（待集成）
