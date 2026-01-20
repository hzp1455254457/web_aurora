<template>
  <section class="landing-section">
    <img 
      class="landing-bg" 
      :src="backgroundImage" 
      alt="Landing Background"
    />
    <div class="landing-overlay"></div>
    <div class="landing-content">
      <div class="landing-text">
        <h1 class="landing-title">{{ title }}</h1>
        <button class="get-started-btn" @click="handleGetStarted">
          <span class="get-started-text">{{ buttonText }}</span>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Props {
  title?: string
  buttonText?: string
  backgroundImage?: string
}

const props = withDefaults(defineProps<Props>(), {
  title: '玲梦AI\n成为你温柔而稳定的陪伴',
  buttonText: 'Get Started',
  backgroundImage: 'https://placehold.co/1440x810'
})

const emit = defineEmits<{
  getStarted: []
}>()

const handleGetStarted = () => {
  emit('getStarted')
}
</script>

<style scoped>
.landing-section {
  width: 100%;
  height: 810px;
  position: relative;
  overflow: hidden;
}

.landing-bg {
  width: 1440px;
  height: 810px;
  position: absolute;
  left: -48px;
  top: 0;
  object-fit: cover;
}

.landing-overlay {
  width: 729px;
  height: 810px;
  position: absolute;
  left: -48px;
  top: 0;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.20) 100%);
  backdrop-filter: blur(0px);
}

.landing-content {
  width: 1440px;
  padding: 152px 96px 0;
  position: absolute;
  left: -48px;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.landing-text {
  width: 527px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 26px;
}

.landing-title {
  width: 544px;
  color: rgba(0, 0, 0, 0.80);
  font-size: 64px;
  font-weight: 700;
  line-height: 91px;
  white-space: pre-line;
  margin: 0;
}

.get-started-btn {
  width: 185.44px;
  height: 51px;
  position: relative;
  background: rgba(255, 255, 255, 0.20);
  box-shadow: 0px 8px 10px -6px rgba(0, 0, 0, 0.20);
  border-radius: 38px;
  outline: 1px rgba(255, 254.99, 254.98, 0.30) solid;
  outline-offset: -1px;
  cursor: pointer;
  overflow: hidden;
  border: none;
  transition: transform 0.2s ease;
}

.get-started-btn:hover {
  transform: scale(1.05);
}

.get-started-btn::before {
  content: '';
  position: absolute;
  width: 183.44px;
  height: 49px;
  left: 1px;
  top: 1px;
  background: linear-gradient(90deg, rgba(255, 254.99, 254.98, 0.10) 0%, rgba(255, 254.99, 254.98, 0.05) 50%, rgba(0, 0, 0, 0) 100%);
  border-radius: 38px;
}

.get-started-btn::after {
  content: '';
  position: absolute;
  width: 183.44px;
  height: 49px;
  left: 1px;
  top: 1px;
  background: rgba(255, 255, 255, 0);
  box-shadow: 0px 2px 4px rgba(255, 254.99, 254.98, 0.20) inset;
  border-radius: 38px;
}

.get-started-text {
  position: absolute;
  left: 41px;
  top: 11.50px;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-shadow: 0px 1px 4px rgba(0, 0, 0, 0.50);
  z-index: 1;
}
</style>
