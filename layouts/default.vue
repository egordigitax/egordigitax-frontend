<script setup lang="ts">

import AppHeader from "~/components/layout/AppHeader.vue";
import AppFooter from "~/components/layout/AppFooter.vue";
</script>

<template>
  <div class="flex flex-col container mx-auto min-h-screen px-9 lg:px-9">
    <app-header class="py-8 pt-9 lg:pt-20 lg:pb-10"/>
    <div class="flex-grow basis-auto h-full">
      <slot/>
    </div>
    <app-footer class="py-10"/>
  </div>
</template>

<style scoped>
</style>
