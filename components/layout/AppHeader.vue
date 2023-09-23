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
  <header class="flex items-center text-2xl flex-col lg:flex-row">
    <div class="flex text-accent mb-2 lg:mb-0 lg:mr-20 justify-between w-full lg:w-auto">
      <nuxt-link to="/" class="select-none">
        {{ $t('egordigitax') }}
      </nuxt-link>
      <button class="cursor-pointer lg:hidden" @click="toggleExpand">
        <nuxt-icon name="burger" />
      </button>
    </div>
    <div class="w-full flex-col lg:flex-row transition-all duration-500 lg:flex gap-8 mt-4 lg:mt-0" :class="isExpanded ? 'flex' : 'hidden'">
      <div class="flex gap-6 items- lg:items-center flex-col lg:flex-row text-gray-500 font-normal">
        <nuxt-link class="hover:text-accent transition-all" to="/">{{ $t('Home') }}</nuxt-link>
        <nuxt-link class="hover:text-accent transition-all" to="/items">{{ $t('Items') }}</nuxt-link>
        <nuxt-link class="hover:text-accent transition-all" to="/pictures">{{ $t('Pictures') }}</nuxt-link>
        <nuxt-link class="hover:text-accent transition-all" to="/generative">{{ $t('Generative') }}</nuxt-link>
        <nuxt-link class="hover:text-accent transition-all" to="/work">{{ $t('Work') }}</nuxt-link>
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
