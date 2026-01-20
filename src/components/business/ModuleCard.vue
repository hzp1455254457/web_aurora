<template>
  <div class="module-card">
    <div class="module-card-bg"></div>
    <div class="module-header">
      <div class="module-title-group">
        <img 
          v-if="iconUrl" 
          class="module-icon" 
          :src="iconUrl" 
          :alt="title"
        />
        <div class="module-title">{{ title }}</div>
      </div>
      <button class="module-close" @click="handleClose" aria-label="关闭"></button>
    </div>
    <div v-if="description" class="module-description">{{ description }}</div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string
  description?: string
  iconUrl?: string
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  iconUrl: ''
})

const emit = defineEmits<{
  close: []
}>()

const handleClose = () => {
  emit('close')
}
</script>

<style scoped>
.module-card {
  width: 371px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2px;
}

.module-card-bg {
  width: 392px;
  height: 156px;
  position: absolute;
  left: -10px;
  top: -16px;
  background: rgba(33.10, 33.10, 33.10, 0.15);
  border-radius: 18px;
  border: 1px white solid;
  backdrop-filter: blur(10px);
}

.module-header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  z-index: 1;
}

.module-title-group {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
}

.module-icon {
  width: 66px;
  height: 66px;
  border-radius: 16px;
  object-fit: cover;
}

.module-title {
  color: #FEFCF9;
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;
}

.module-close {
  width: 45px;
  height: 45px;
  background: #F4F4F4;
  box-shadow: 10px 10px 21.213199615478516px -3.75px rgba(0, 0, 0, 0.05);
  border-radius: 53px;
  position: relative;
  border: none;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.module-close:hover {
  transform: scale(1.1);
}

.module-close::before,
.module-close::after {
  content: '';
  position: absolute;
  width: 27px;
  height: 0;
  outline: 5px #FC7445 solid;
  outline-offset: -2.50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.module-close::after {
  transform: translate(-50%, -50%) rotate(-90deg);
}

.module-description {
  width: 371px;
  color: white;
  font-size: 20px;
  font-family: 'Microsoft YaHei UI', sans-serif;
  font-weight: 400;
  line-height: 28px;
  margin-top: 2px;
  position: relative;
  z-index: 1;
}
</style>
