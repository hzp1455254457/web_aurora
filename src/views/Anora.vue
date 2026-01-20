<template>
  <div class="anora-page">
    <!-- 头部组件 -->
    <AnoraHeader>
      <template #nav>
        <!-- 导航菜单占位，后续可根据设计数据动态生成 -->
      </template>
    </AnoraHeader>

    <!-- 主面板组件 -->
    <AnoraMainPanel>
      <template #landing>
        <div class="landing-content">
          <h1>Welcome to Anora</h1>
          <p>AI 女友交互平台</p>
          <!-- Landingpage 内容区域 - 1344x810 -->
        </div>
      </template>

      <template #bento-grid-1>
        <div class="bento-grid">
          <div class="bento-item">Bento Grid 1 - 内容区域 1</div>
          <div class="bento-item">Bento Grid 1 - 内容区域 2</div>
        </div>
      </template>

      <template #bento-grid-2>
        <div class="bento-grid">
          <div class="bento-item">Bento Grid 2 - 内容区域 1</div>
          <div class="bento-item">Bento Grid 2 - 内容区域 2</div>
        </div>
      </template>

      <template #group-1683>
        <div class="group-content">
          <h2>Group 1683</h2>
          <p>内容区域 - 1348.25x784</p>
        </div>
      </template>

      <template #bento-grid-3>
        <div class="bento-grid">
          <div class="bento-item">Bento Grid 3 - 内容区域 1</div>
          <div class="bento-item">Bento Grid 3 - 内容区域 2</div>
        </div>
      </template>

      <template #backpage>
        <div class="backpage-content">
          <h2>Backpage</h2>
          <p>内容区域 - 1344px 宽</p>
        </div>
      </template>

      <template #intro-company>
        <div class="intro-content">
          <h2>Company Introduction</h2>
          <p>公司介绍内容 - 1200x243</p>
        </div>
      </template>
    </AnoraMainPanel>
  </div>
</template>

<script setup lang="ts">
import AnoraHeader from '@/components/layout/AnoraHeader.vue'
import AnoraMainPanel from '@/components/business/AnoraMainPanel.vue'

// Anora 主页组件
// 根据 Figma 设计：[Container]homepage
// 设计尺寸：1440x4539
// 设计结构：
// - [Container]head (头部，1440x84)
//   - [Image]logo (Logo，197x73.21)
//   - [Container]tab (导航菜单)
// - [Container]MainPanel (主面板)
//   - Main Content (1344px 宽)
//     - Landingpage (1344x810)
//     - bentoGrid02 (多个)
//     - Group 1683 (1348.25x784)
//     - backpage (1344px 宽)
//     - intro_company (1200x243)
</script>

<style scoped>
/* 主页面容器 - 根据 Figma 设计：[Container]homepage */
.anora-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #ffffff;
  padding: 0 48px;
  box-sizing: border-box;
}

/* Landingpage 内容样式 */
.landing-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
  padding: 3rem;
  box-sizing: border-box;
}

.landing-content h1 {
  font-size: 3rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
}

.landing-content p {
  font-size: 1.25rem;
  margin: 0;
  opacity: 0.9;
}

/* Bento Grid 样式 */
.bento-grid {
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
}

.bento-item {
  width: 100%;
  min-height: 200px;
  background: #f9fafb;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  font-size: 1.1rem;
  box-sizing: border-box;
  transition: all 0.3s ease;
}

.bento-item:hover {
  background: #f3f4f6;
  border-color: #d1d5db;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

/* Group 1683 内容样式 */
.group-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f9fafb;
  border-radius: 12px;
  padding: 3rem;
  box-sizing: border-box;
}

.group-content h2 {
  font-size: 2rem;
  color: #333;
  margin: 0 0 1rem 0;
}

.group-content p {
  color: #666;
  margin: 0;
}

/* Backpage 内容样式 */
.backpage-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 48px;
  padding: 3rem;
  background: #f9fafb;
  border-radius: 12px;
  box-sizing: border-box;
}

.backpage-content h2 {
  font-size: 2rem;
  color: #333;
  margin: 0;
}

.backpage-content p {
  color: #666;
  margin: 0;
}

/* Company Intro 内容样式 */
.intro-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 2rem;
  box-sizing: border-box;
}

.intro-content h2 {
  font-size: 1.75rem;
  color: #333;
  margin: 0 0 1rem 0;
}

.intro-content p {
  color: #666;
  margin: 0;
  text-align: center;
}

/* 响应式设计 */
@media (max-width: 1440px) {
  .anora-page {
    padding: 0 24px;
  }
}

@media (max-width: 768px) {
  .anora-page {
    padding: 0 16px;
  }

  .landing-content h1 {
    font-size: 2rem;
  }

  .landing-content p {
    font-size: 1rem;
  }
}
</style>
