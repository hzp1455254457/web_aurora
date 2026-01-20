<template>
  <div class="anora-page">
    <header class="anora-header">
      <h1 class="anora-title">Anora</h1>
      <!-- Figma 设计内容将在这里渲染 -->
    </header>
    <main class="anora-main">
      <div class="anora-content">
        <!-- 加载状态 -->
        <div v-if="loading" class="design-placeholder">
          <p>正在从 Figma 加载设计数据...</p>
          <p class="hint">使用 Figma MCP 工具获取设计</p>
        </div>

        <!-- 错误状态 -->
        <div v-else-if="error || designError" class="design-error">
          <h3>⚠️ 加载失败</h3>
          <p>{{ error || designError }}</p>
          <div class="error-hint">
            <p><strong>解决方案：</strong></p>
            <ul>
              <li>确保已配置 Figma MCP（推荐）</li>
              <li>或在 .env 文件中配置 VITE_FIGMA_API_TOKEN</li>
              <li>确保有访问该 Figma 文件的权限</li>
            </ul>
            <p class="mcp-hint">
              💡 <strong>使用 MCP 工具：</strong>在 Cursor 中请求 AI 助手使用 Figma MCP 工具获取设计数据
            </p>
          </div>
        </div>

        <!-- 设计内容区域 -->
        <div v-else-if="designData" class="design-content">
          <!-- 设计数据已加载，这里将渲染实际的设计内容 -->
          <div class="design-info">
            <h3>✅ 设计数据已加载</h3>
            <p>File Key: {{ designData.fileKey }}</p>
            <p v-if="designData.nodeId">Node ID: {{ designData.nodeId }}</p>
            <p class="hint">设计内容将根据 Figma 数据自动生成</p>
          </div>
        </div>

        <!-- 默认占位 -->
        <div v-else class="design-placeholder">
          <p>等待加载设计数据...</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useFigmaDesign } from '@/composables/useFigmaDesign'
import type { FigmaDesignData } from '@/types/figma'

// Figma 设计数据
const designData = ref<FigmaDesignData | null>(null)
const loading = ref(true)
const error = ref<string | null>(null)

// 使用 Figma 设计组合式函数
const { fetchDesign, loadDesignAssets, error: designError } = useFigmaDesign()

// Figma 设计信息
const FIGMA_FILE_KEY = '296WIAxav2gKg3MukBtrgY'
const FIGMA_NODE_ID = '3208:3037'

onMounted(async () => {
  try {
    // 从 Figma 获取设计数据
    // 优先使用 MCP 工具，如果没有配置则使用 REST API
    const data = await fetchDesign(FIGMA_FILE_KEY, FIGMA_NODE_ID)
    designData.value = data
    
    // 加载设计资源（图片等）
    if (data) {
      await loadDesignAssets(data)
    }
  } catch (err) {
    error.value = err instanceof Error ? err.message : '加载设计失败'
    console.error('加载 Figma 设计失败:', err)
  } finally {
    loading.value = false
  }
})
</script>

<style scoped>
.anora-page {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.anora-header {
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  text-align: center;
}

.anora-title {
  margin: 0;
  font-size: 2.5rem;
  font-weight: 600;
}

.anora-main {
  flex: 1;
  padding: 2rem;
}

.anora-content {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
}

.design-placeholder {
  background: white;
  border-radius: 12px;
  padding: 3rem;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.design-placeholder p {
  color: #666;
  margin: 0.5rem 0;
}

.hint {
  font-size: 0.9rem;
  color: #999;
  font-style: italic;
}

.design-error {
  background: #fff5f5;
  border: 1px solid #feb2b2;
  border-radius: 12px;
  padding: 2rem;
  color: #c53030;
}

.design-error h3 {
  margin-top: 0;
  color: #c53030;
}

.error-hint {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #feb2b2;
  color: #744;
}

.error-hint ul {
  margin: 0.5rem 0;
  padding-left: 1.5rem;
}

.error-hint li {
  margin: 0.25rem 0;
}

.mcp-hint {
  margin-top: 1rem;
  padding: 1rem;
  background: #ebf8ff;
  border-radius: 8px;
  color: #2c5282;
}

.design-content {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.design-info {
  text-align: center;
}

.design-info h3 {
  color: #48bb78;
  margin-top: 0;
}

.design-info p {
  color: #666;
  margin: 0.5rem 0;
}
</style>
