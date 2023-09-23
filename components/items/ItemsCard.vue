<script setup lang="ts">
import {Item} from "~/api/items";

type IImageCardProps = {
  item: Item;
  link: string;
}
const props = defineProps<IImageCardProps>()
const router = useRouter();
const redirectToLink = () => router.push(props.link);

</script>

<template>
  <div class="border-2 border-none h-full">
    <image-carousel @click="redirectToLink" class="w-full h-auto mb-4 aspect-square cursor-pointer" :images="item.images" />
    <nuxt-link :to="link" class="text-2xl text-gray-600 mb-2 hover:underline">{{item.title}}</nuxt-link>
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
