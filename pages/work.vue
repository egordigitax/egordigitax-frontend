<script setup lang="ts">

import {getWork, Work} from "~/api/work";

const data = ref<Work>({
  title: '',
  description: '',
  image: '',
  items: []
})
const {locale} = useI18n();

onBeforeMount(async () => {
  data.value = await getWork()
})
watch(locale, async () => {
  data.value = await getWork()
})
</script>

<template>
  <div class="text-gray-400">
    <span class="block mb-5">{{ data.description }}</span>
    <div class="flex flex-col-reverse lg:flex-row lg:items-center justify-between mb-8">
      <div class="max-w-[600px]">
        <span class="text-2xl text-accent mb-2">{{ $t('Yo') }}</span>
        <div>
          <div>
            {{data.title}}
          </div>
        </div>
      </div>
      <img :src="data.image" alt="" class="aspect-square object-cover mb-6 lg:max-w-[390px]">
    </div>
    <div class="flex flex-col gap-10">
      <span class="text-gray-400 text-3xl">{{$t('Recommendations')}}</span>
      <work-card
          v-for="(item, index) in data.items"
          :key="index"
          :image="item.image"
          :title="item.title"
          :description="item.description"
          :rating="item.rating"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
