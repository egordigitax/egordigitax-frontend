<script setup lang="ts">

import {MainItem} from "~/api/main";

interface IMainStoryGalleryProps {
  item: MainItem
}
defineProps<IMainStoryGalleryProps>()
</script>

<template>
  <div class="flex  gap-6 lg:grid lg:grid-cols-3 lg:gap-6">
    <div v-for="(image, index) in item.images" :key="index" class="
        hidden md:flex
        col-span-1 h-[636px] items-center justify-center
      "
    >
      <img :src="image" alt="" class="w-auto h-full object-cover">
    </div>
    <image-carousel
      class="block md:hidden
          h-[636px] w-auto
          max-w-[560px]
          justify-center mb-4"
      :images="item.images"
      :wrapper-height="'636px'"
    />
  </div>
</template>

<style scoped>

</style>
