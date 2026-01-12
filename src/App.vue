<template>
  <div class="app">
    <header class="header">
      <img src="/vite.svg" alt="Vite logo" class="logo" />
      <h1>Vue 3 + Vite</h1>
    </header>
    <main class="main">
      <div class="card">
        <h2>🚀 项目已就绪</h2>
        <p>这是一个基于 Vue 3 + Vite + TypeScript 的项目框架</p>
        <div class="info">
          <p><strong>开发环境：</strong>运行 <code>npm run dev</code></p>
          <p><strong>构建生产：</strong>运行 <code>npm run build</code></p>
          <p><strong>预览构建：</strong>运行 <code>npm run preview</code></p>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
// 使用 Composition API
</script>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.header {
  padding: 2rem;
  text-align: center;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.header h1 {
  margin: 0;
  font-size: 2.5rem;
}

.main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  width: 100%;
}

.card h2 {
  margin-top: 0;
  color: #333;
}

.card p {
  color: #666;
  line-height: 1.6;
}

.info {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #eee;
}

.info p {
  margin: 0.5rem 0;
}

code {
  background: #f4f4f4;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #e83e8c;
}
</style>
