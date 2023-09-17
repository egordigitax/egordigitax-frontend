<script setup lang="ts">
import {Item} from "~/api/items";

type IImageCardProps = {
  item: Item;
  link: string;
}
defineProps<IImageCardProps>()

</script>

<template>
  <div class="border-2 border-none h-full">
    <image-carousel class="w-full h-auto mb-4 aspect-square" :images="item.images" />
    <span class="text-2xl text-gray-600 mb-2">{{item.title}}</span>
    <p class="">
      {{item.description}}
    </p>
    <nuxt-link :to="link">
      <button class="cursor-pointer text-accent hover:underline">{{$t('Show more')}}</button>
    </nuxt-link>
  </div>
</template>

<style scoped>
p {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-align: start;
}
</style>
