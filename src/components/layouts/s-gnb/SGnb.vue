<template>
  <div class="gnb">
    <nav class="nav">
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
      </ul>
    </nav>
    <div class="locales">
      <LocaleSwitcher />
    </div>
  </div>
</template>

<script setup lang="ts">
import LocaleSwitcher from '@/components/locale-switcher/LocaleSwitcher.vue';
</script>

<style scoped lang="scss">
.gnb {
  display: flex;
  justify-content: space-between;
  align-items: center;
  nav {
    a {
      font-weight: bold;
      color: #2c3e50;

      &.router-link-exact-active {
        color: #42b983;
      }
    }
  }
  .menu {
    display: flex;
  }
  .locales {
  }
}
</style>
