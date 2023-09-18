<script setup lang="ts">
import dayjs from "dayjs";
import {getItemById, Item} from "~/api/items";

const route = useRoute();
const {locale} = useI18n();
const data = ref<Item>({
  id: '',
  title: '',
  description: '',
  images: [],
  datetime: '',
});

const date = computed(() => dayjs(data.value.datetime).format('DD.MM.YYYY'))

onMounted(async () => {
  data.value = await getItemById(route.params.id as string)
})

watch(locale, async () => {
  data.value = await getItemById(route.params.id as string)
})
</script>

<template>
  <div class="flex text-gray-400">
    <image-carousel :images="data.images" class="basis-1/2 h-[636px]" is-centered/>
    <div class="flex flex-col basis-1/2 ml-10 w-fit">
      <span class="text-2xl text-gray-600 mb-2">{{data.title}}</span>
      <div>{{data.description}}</div>
      <div>{{$t('Date')}}: {{date}}</div>
      <nuxt-link to="/items" class="flex justify-end mt-auto">
        <button class="text-accent hover:underline text-2xl">{{$t('Back')}}</button>
      </nuxt-link>
    </div>
  </div>
</template>

<style>
</style>
