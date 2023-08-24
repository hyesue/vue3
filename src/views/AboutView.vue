<template>
  <div class="about">
    <h1>This is an about page</h1>
    <AppTypographyIcon />
    <AppAnimatedIcon />
  </div>
</template>
<script lang="ts">
import {Options, Vue} from 'vue-class-component';
import AppTypographyIcon from '@/components/s-icon/AppTypographyIcon.vue';
import AppAnimatedIcon from '@/components/s-icon/AppAnimatedIcon.vue';
import SIcon from '@/components/s-icon/s-icon.vue'; // @ is an alias to /src

@Options({
  components: {
    SIcon,
    AppTypographyIcon,
    AppAnimatedIcon,
  },
  layout: 'DefaultLayout', // 다른 레이아웃 사용
})
export default class AboutView extends Vue {}
</script>
