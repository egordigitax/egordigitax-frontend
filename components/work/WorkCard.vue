<script setup lang="ts">
interface IWorkCard {
  title: string;
  description: string;
  image: string,
  rating: number;
}
defineProps<IWorkCard>()
</script>

<template>
<div class="flex items-center justify-between">
  <div class="flex flex-col justify-center gap-4">
    <img :src="image" alt="" class="max-w-[160px] mr-10">
    <div class="flex md:hidden">
      <nuxt-icon v-for="(_, index) in rating" :key="index" name='star' class="text-3xl text-accent" />
    </div>
  </div>
  <div class="max-w-[500px]">
    <span class="text-2xl text-gray-600 mb-2">{{title}}</span>
    <p>{{description}}</p>
  </div>
  <div class="hidden md:flex gap ml-auto">
    <nuxt-icon v-for="(_, index) in rating" :key="index" name='star' class="text-3xl text-accent" />
  </div>
</div>
</template>

<style scoped>

</style>
