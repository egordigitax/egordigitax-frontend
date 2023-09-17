<script setup lang="ts">

import {MainItem} from "~/api/main";
interface IMainGalleryProps {
  item: MainItem
}
defineProps<IMainGalleryProps>()
</script>

<template>
  <div class="block md:grid md:grid-cols-3 gap-6">
    <div v-for="(image, index) in item.images" :key="index" class="hidden md:block aspect-square">
      <img :src="image" class="w-auto object-cover h-full" alt="promo-image">
    </div>
    <image-carousel
      class="block md:hidden aspect-square"
      :images="item.images"
    />
  </div>
</template>

<style scoped>

</style>
