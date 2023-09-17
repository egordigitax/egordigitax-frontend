<script setup lang="ts">

import AppHeader from "~/components/layout/AppHeader.vue";
import AppFooter from "~/components/layout/AppFooter.vue";
</script>

<template>
  <div class="flex flex-col container mx-auto min-h-screen px-9 lg:px-0">
    <AppHeader class="py-10"/>
    <div class="flex-grow basis-auto h-full">
      <slot/>
    </div>
    <AppFooter  class="py-10"/>
  </div>
</template>

<style scoped>
</style>
