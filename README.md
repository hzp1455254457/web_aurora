# web_aurora

基于 Vue 3、Vite 和 TypeScript 的现代化前端项目框架，用于 AI 数字人 Web 应用。

## 🚀 快速开始

### 安装依赖

```bash
npm install
```

### 开发

```bash
npm run dev
```

### 构建

```bash
npm run build
```

### 预览构建结果

```bash
npm run preview
```

## 📦 技术栈

- **Vue 3** - 渐进式 JavaScript 框架
- **Vite** - 下一代前端构建工具
- **TypeScript** - JavaScript 的超集

## 🚢 部署

### Vercel 部署（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 自动检测配置，一键部署

### Netlify 部署

1. 将代码推送到 GitHub
2. 在 [Netlify](https://netlify.com) 导入项目
3. 构建命令：`npm run build`
4. 发布目录：`dist`

### GitHub Pages 部署

```bash
# 构建项目
npm run build

# 部署到 gh-pages 分支
# 使用 gh-pages 工具或手动上传 dist 目录
```

## 📁 项目结构

```
.
├── public/          # 静态资源
├── src/
│   ├── App.vue     # 根组件
│   ├── main.ts     # 入口文件
│   └── style.css   # 全局样式
├── index.html      # HTML 模板
├── vite.config.ts  # Vite 配置
└── tsconfig.json   # TypeScript 配置
```

## 🔧 配置说明

- `vite.config.ts` - Vite 构建配置，包含路径别名、构建优化等
- `tsconfig.json` - TypeScript 编译配置，启用严格模式
- `vercel.json` - Vercel 部署配置
- `netlify.toml` - Netlify 部署配置
