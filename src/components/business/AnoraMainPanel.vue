<template>
  <div class="main-panel">
    <div class="main-content">
      <!-- Landingpage 区域 -->
      <section v-if="$slots.landing" class="landing-section">
        <slot name="landing"></slot>
      </section>

      <!-- Bento Grid 1 -->
      <section v-if="$slots['bento-grid-1']" class="bento-section">
        <slot name="bento-grid-1"></slot>
      </section>

      <!-- Bento Grid 2 -->
      <section v-if="$slots['bento-grid-2']" class="bento-section">
        <slot name="bento-grid-2"></slot>
      </section>

      <!-- Group 1683 -->
      <section v-if="$slots['group-1683']" class="group-section">
        <slot name="group-1683"></slot>
      </section>

      <!-- Bento Grid 3 -->
      <section v-if="$slots['bento-grid-3']" class="bento-section">
        <slot name="bento-grid-3"></slot>
      </section>

      <!-- Backpage -->
      <section v-if="$slots.backpage" class="backpage-section">
        <slot name="backpage"></slot>
      </section>

      <!-- Company Intro -->
      <section v-if="$slots['intro-company']" class="intro-section">
        <slot name="intro-company"></slot>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
// 主面板组件
// 根据 Figma 设计：[Container]MainPanel
</script>

<style scoped>
/* 主面板容器 - 根据 Figma 设计：[Container]MainPanel */
.main-panel {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 48px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

/* 主内容区域 - 根据 Figma 设计：Main Content */
.main-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 102px;
  width: 1344px;
  box-sizing: border-box;
}

/* Landingpage 区域 - 根据 Figma 设计：Landingpage */
.landing-section {
  width: 100%;
  height: 810px;
  box-sizing: border-box;
}

/* Bento Grid 区域 - 根据 Figma 设计：bentoGrid02 */
.bento-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-self: stretch;
  gap: 24px;
  box-sizing: border-box;
}

/* Group 1683 区域 */
.group-section {
  width: 1348.25px;
  height: 784px;
  box-sizing: border-box;
}

/* Backpage 区域 - 根据 Figma 设计：backpage */
.backpage-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 48px;
  box-sizing: border-box;
}

/* Company Intro 区域 - 根据 Figma 设计：intro_company */
.intro-section {
  width: 1200px;
  height: 243px;
  box-sizing: border-box;
}

/* 响应式设计 */
@media (max-width: 1440px) {
  .main-content {
    width: 100%;
    padding: 0 24px;
  }

  .landing-section {
    height: auto;
    min-height: 400px;
  }

  .group-section {
    width: 100%;
    height: auto;
    min-height: 400px;
  }

  .intro-section {
    width: 100%;
    height: auto;
    min-height: 200px;
  }
}
</style>
