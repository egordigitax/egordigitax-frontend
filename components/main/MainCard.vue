<script setup lang="ts">
import {MainItem} from "~/api/main";
import MainStoryGallery from "~/components/main/MainStoryGallery.vue";

interface IMainPromoCard {
  item: MainItem
}
defineProps<IMainPromoCard>()
</script>

<template>
  <div class="flex flex-col max-w-screen w-full h-auto">
    <main-promo-block v-if="item.images?.length === 1" :item="item" class="mb-6"/>
    <main-story-gallery v-else-if="item.images?.length > 1 && item.type === 'story-gallery'" :item="item" class="mb-6"/>
    <main-gallery v-else-if="item.images?.length > 1 && item.type === 'gallery'" :item="item" class="mb-6"/>
    <div class="flex flex-col lg:flex-row">
      <div class="basis-1/2">
        <span class="text-2xl text-gray-500 mb-2">{{ item.title }}</span>
        <div>{{ item.description }}</div>
      </div>
      <div class="flex items-end ml-auto">
        <nuxt-link :to="item.url" class="text-accent hover:underline text-2xl">{{$t('Show more')}}</nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
