<template>
  <div class="layout main">
    <SHeader />
    <router-view />
    <!-- 페이지 컴포넌트가 여기에 렌더링됨 -->
    <SFooter />
  </div>
</template>

<script setup lang="ts">
import SHeader from '@/components/layouts/s-header/SHeader.vue';
import SFooter from '@/components/layouts/s-footer/SFooter.vue';
</script>

<style scoped>
/* 스타일 작성 */
</style>
