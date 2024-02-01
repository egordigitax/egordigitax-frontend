<template>
<!--  <default>-->
    <NuxtPage />
<!--  </default>-->
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  padding-left: calc(100vw - 100%);
}
</style>
<script setup lang="ts">
import Default from "~/layouts/default.vue";

const { locale } = useI18n()
const router = useRouter();

let tg = window.Telegram.WebApp;
tg.expand()

onBeforeMount(() => {
  const localLocale = localStorage.getItem('locale');
  const systemLocale = navigator.language;
  if (localLocale) {
    locale.value = localLocale
    return
  }

  if (!localLocale && systemLocale) {
    locale.value = systemLocale === 'ru-RU' || systemLocale === 'ru' ? 'ru' : 'en'
    localStorage.setItem('locale', locale.value)
    return
  }
})
</script>

