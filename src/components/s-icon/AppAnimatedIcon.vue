<template>
  <section>
    <h2>Animated Icons</h2>
    <p>Click on the icons below</p>
    <icon-watch />
    <icon-palette />
    <icon-scissors />
    <icon-heart-face />
  </section>
</template>

<script>
import IconWatch from './iconAnimated/IconWatch.vue';
import IconPalette from './iconAnimated/IconPalette.vue';
import IconScissors from './iconAnimated/IconScissors.vue';
import IconHeartFace from './iconAnimated/IconHeartFace.vue';

export default {
  components: {
    IconWatch,
    IconPalette,
    IconScissors,
    IconHeartFace,
  },
};
</script>

<style scoped>
svg {
  cursor: pointer;
}
</style>
