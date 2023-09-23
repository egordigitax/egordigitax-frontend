<script setup lang="ts">

import LinksBlock from "~/components/LinksBlock.vue";

const isExpanded = ref(false);
const { locale } = useI18n()

const toggleExpand = () => isExpanded.value = !isExpanded.value;
const toggleLocale = () => {
  const newValue = locale.value === 'en' ? 'ru' : 'en';
  locale.value = newValue;
  localStorage.setItem('locale', newValue);
};
</script>

<template>
  <header class="flex text-2xl flex-col lg:flex-row">
    <div class="flex text-accent mb-12 lg:mb-0 lg:mr-20  justify-between w-full lg:w-auto">
      <nuxt-link to="/" class="select-none">
        {{ $t('egordigitax') }}
      </nuxt-link>
      <button class="cursor-pointer lg:hidden" @click="toggleExpand">
        <nuxt-icon name="burger" />
      </button>
    </div>
    <div class="w-full flex-col lg:flex-row transition-all duration-500 lg:flex gap-8" :class="isExpanded ? 'flex' : 'hidden'">
      <div class="flex gap-6 items-start flex-col lg:flex-row text-gray-500 font-normal">
        <NuxtLink to="/">{{ $t('Home') }}</NuxtLink>
        <NuxtLink to="/items">{{ $t('Items') }}</NuxtLink>
        <NuxtLink to="/pictures">{{ $t('Pictures') }}</NuxtLink>
        <NuxtLink to="/generative">{{ $t('Generative') }}</NuxtLink>
        <NuxtLink to="/work">{{ $t('Work') }}</NuxtLink>
      </div>
      <div class="flex items-start justify-between lg:justify-start gap-6 ml-0 lg:ml-auto">
        <button class="text-gray-500 font-normal hover:underline cursor-pointer pb-1.5" @click="toggleLocale">{{locale}}</button>
        <links-block/>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>
