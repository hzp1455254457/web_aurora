<template>
  <div class="lingmeng-page">
    <!-- 头部组件 -->
    <AnoraHeader />

    <!-- 主面板组件 -->
    <AnoraMainPanel>
      <!-- Landing Section -->
      <template #landing>
        <LandingSection 
          @get-started="handleGetStarted"
        />
      </template>

      <!-- With you all the time Section -->
      <template #bento-grid-1>
        <FeatureSection
          title="With you all the time"
          title-class="pink"
          :text-content="'She listens.<br/>She remembers.<br/>She responds.<br/>She stays.'"
          image-url="https://placehold.co/812x457"
          image-alt="With you all the time"
        />
      </template>

      <!-- Desktop Companion Cases Section -->
      <template #bento-grid-2>
        <FeatureSection
          title="桌面陪伴案例"
          title-class="black"
          :features="desktopCompanionFeatures"
          image-url="https://placehold.co/813x457"
          image-alt="Desktop Companion Cases"
          image-border-radius="12px"
        />
      </template>

      <!-- Images Section -->
      <template #group-1683>
        <div class="images-section">
          <img 
            class="content-image" 
            src="https://placehold.co/1122x676" 
            alt="Content Image 1"
          />
          <img 
            class="rotated-image" 
            src="https://placehold.co/753x676" 
            alt="Content Image 2"
          />
          <div class="gradient-box"></div>
          <div class="gradient-box rotated"></div>
        </div>
      </template>

      <!-- Dots Section -->
      <template #bento-grid-3>
        <div class="dots-section">
          <div class="dots">
            <div 
              v-for="i in 23" 
              :key="i" 
              class="dot"
            ></div>
          </div>
          <div class="dots">
            <div 
              v-for="i in 23" 
              :key="i + 23" 
              class="dot"
            ></div>
          </div>
        </div>
      </template>

      <!-- Module Cards Section -->
      <template #backpage>
        <div class="modules-section">
          <ModuleCard
            v-for="module in modules"
            :key="module.title"
            :title="module.title"
            :description="module.description"
            :icon-url="module.iconUrl"
            @close="handleModuleClose(module)"
          />
        </div>
      </template>
    </AnoraMainPanel>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import AnoraHeader from '@/components/layout/AnoraHeader.vue'
import AnoraMainPanel from '@/components/business/AnoraMainPanel.vue'
import LandingSection from '@/components/business/LandingSection.vue'
import FeatureSection from '@/components/business/FeatureSection.vue'
import ModuleCard from '@/components/business/ModuleCard.vue'

// 桌面陪伴案例特性列表
const desktopCompanionFeatures = ref([
  { text: '实时提供情绪价值', active: true },
  { text: '实时提供游戏攻略', active: false },
  { text: '在游戏中寻找共鸣', active: false },
  { text: '你的贴心追剧搭子', active: false }
])

// 模块卡片数据
const modules = ref([
  {
    title: '健康管家模组',
    description: '趋势分析、提醒、作息微调方案、久坐/拉伸计划、用药/复诊日程管理（仅提醒）',
    iconUrl: 'https://placehold.co/66x66'
  },
  {
    title: '桌面自动化模组',
    description: '一键整理下载文件、自动重命名、截图归档、会议录音转写',
    iconUrl: 'https://placehold.co/66x66'
  },
  {
    title: '区块链分析模组',
    description: '地址画像(资金流向/活跃度)、项目合约风险提示(权限/升级/黑名单)、热点叙事追踪',
    iconUrl: 'https://placehold.co/66x66'
  },
  {
    title: '番茄钟模组',
    description: '',
    iconUrl: 'https://placehold.co/66x66'
  }
])

// 处理 Get Started 按钮点击
const handleGetStarted = () => {
  console.log('Get Started clicked')
  // TODO: 实现跳转逻辑
}

// 处理模块关闭
const handleModuleClose = (module: typeof modules.value[0]) => {
  console.log('Close module:', module.title)
  // TODO: 实现关闭逻辑
}
</script>

<style scoped>
/* 主页面容器 */
.lingmeng-page {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FEFEFE;
  padding: 0 48px;
  box-sizing: border-box;
}

/* Images Section */
.images-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.content-image {
  width: 1122px;
  height: 676px;
  object-fit: cover;
}

.rotated-image {
  width: 753px;
  height: 676px;
  transform: rotate(180deg);
  transform-origin: top left;
  object-fit: cover;
}

.gradient-box {
  width: 622px;
  height: 676px;
  background: linear-gradient(270deg, rgba(255, 200, 219, 0) 0%, rgba(255, 140.99, 180.89, 0.10) 73%, rgba(255, 199.83, 219.14, 0.20) 100%);
  border-left: 3px #FFC8DB solid;
  border-top: 3px #FFC8DB solid;
  border-bottom: 3px #FFC8DB solid;
  backdrop-filter: blur(25px);
}

.gradient-box.rotated {
  transform: rotate(180deg);
  transform-origin: top left;
}

/* Dots Section */
.dots-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0;
}

.dots {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 46px;
  flex-wrap: wrap;
}

.dot {
  width: 18px;
  height: 18px;
  background: #FFC8DB;
  border-radius: 9999px;
}

/* Modules Section */
.modules-section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}

/* 响应式设计 */
@media (max-width: 1440px) {
  .lingmeng-page {
    padding: 0 24px;
  }

  .content-image,
  .rotated-image,
  .gradient-box {
    width: 100%;
    max-width: 1122px;
  }
}

@media (max-width: 768px) {
  .lingmeng-page {
    padding: 0 16px;
  }

  .dots {
    gap: 24px;
  }

  .modules-section {
    gap: 16px;
  }
}
</style>
