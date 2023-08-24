<template>
  <div class="layout">
    <SHeader />
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'; // Vue 3에서는 defineComponent를 사용
import SHeader from '../s-header/SHeader.vue';

export default defineComponent({
  components: {
    SHeader,
  },
});
</script>

<style scoped>
/* 스타일 작성 */
</style>
