<template>
  <default>
    <NuxtPage />
  </default>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}
</style>
<script setup lang="ts">
import Default from "~/layouts/default.vue";

const { locale } = useI18n()

onBeforeMount(() => {
  locale.value = localStorage.getItem('locale') || 'en'
})
</script>
