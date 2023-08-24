<template>
  <div class="layout default">
    <SHeader />
    <router-view />
    <!-- 페이지 컴포넌트가 여기에 렌더링됨 -->
  </div>
</template>

<script setup lang="ts">
import SHeader from '@/components/layouts/s-header/SHeader.vue';
</script>

<style scoped>
/* 스타일 작성 */
</style>
