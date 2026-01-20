<template>
  <section class="section">
    <h2 :class="['section-title', titleClass]">{{ title }}</h2>
    <div class="section-content">
      <div v-if="features.length > 0" class="feature-list">
        <template v-for="(feature, index) in features" :key="index">
          <div class="feature-item">
            <div :class="['feature-number', feature.active ? 'active' : 'inactive']">
              {{ String(index + 1).padStart(2, '0') }}
            </div>
            <div :class="['feature-text', feature.active ? '' : 'inactive']">
              {{ feature.text }}
            </div>
          </div>
          <div v-if="index < features.length - 1" class="feature-divider"></div>
        </template>
      </div>
      <div v-else class="text-content">
        <p v-html="textContent"></p>
      </div>
      <img 
        v-if="imageUrl" 
        class="section-image" 
        :src="imageUrl" 
        :alt="imageAlt"
        :style="{ borderRadius: imageBorderRadius }"
      />
    </div>
  </section>
</template>

<script setup lang="ts">
interface Feature {
  text: string
  active?: boolean
}

interface Props {
  title: string
  titleClass?: 'pink' | 'black'
  features?: Feature[]
  textContent?: string
  imageUrl?: string
  imageAlt?: string
  imageBorderRadius?: string
}

withDefaults(defineProps<Props>(), {
  titleClass: 'pink',
  features: () => [],
  textContent: '',
  imageUrl: '',
  imageAlt: '',
  imageBorderRadius: '10px'
})
</script>

<style scoped>
.section {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
}

.section-title {
  width: 100%;
  text-align: center;
  font-size: 64px;
  font-weight: 700;
  line-height: 100px;
  margin: 0;
}

.section-title.pink {
  color: #FCD4E2;
}

.section-title.black {
  color: rgba(0, 0, 0, 0.80);
  font-size: 48px;
}

.section-content {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
}

.text-content {
  width: 500px;
  padding-left: 68px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 23px;
}

.text-content p {
  color: #393939;
  font-size: 35px;
  font-weight: 700;
  line-height: 62px;
  margin: 0;
}

.section-image {
  width: 812px;
  height: 457px;
  border-radius: 10px;
  object-fit: cover;
}

.feature-list {
  width: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 22px;
}

.feature-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 17px;
}

.feature-number {
  width: 68px;
  text-align: center;
  font-size: 48px;
  font-family: 'Impact', sans-serif;
  font-weight: 400;
  line-height: 60px;
}

.feature-number.active {
  color: #FF8DB5;
}

.feature-number.inactive {
  color: #FFC8DB;
}

.feature-text {
  color: black;
  font-size: 28px;
  font-weight: 700;
  line-height: 60px;
}

.feature-text.inactive {
  color: #8D8D8D;
}

.feature-divider {
  width: 500px;
  height: 0;
  outline: 2px #CDCDCD solid;
  outline-offset: -1px;
}
</style>
