<template>
  <header class="anora-header">
    <div class="header-container">
      <!-- Logo -->
      <div class="logo-container">
        <img 
          v-if="logoUrl" 
          :src="logoUrl" 
          alt="Anora Logo" 
          class="logo-image"
        />
        <div v-else class="logo-placeholder">Logo</div>
      </div>

      <!-- 导航菜单 -->
      <nav class="nav-container">
        <slot name="nav">
          <!-- 导航菜单内容，后续可根据设计数据动态生成 -->
        </slot>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import logoImage from '@/assets/figma/logo.png'

// Logo 图片路径
const logoUrl = logoImage
</script>

<style scoped>
/* 头部容器 - 根据 Figma 设计：[Container]head */
.anora-header {
  width: 100%;
  height: 84px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 48px;
  padding: 24px 20px;
  background: #ffffff;
  box-shadow: 0px 1px 8px 0px rgba(0, 0, 0, 0.25);
  box-sizing: border-box;
}

.header-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 66px;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
}

/* Logo 容器 - 根据 Figma 设计：[Image]logo */
.logo-container {
  width: 197px;
  height: 73.21px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
}

.logo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.logo-placeholder {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f3f4f6;
  color: #9ca3af;
  font-size: 14px;
  border-radius: 4px;
}

/* 导航容器 - 根据 Figma 设计：[Container]tab */
.nav-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 62px;
  flex: 1;
}
</style>
