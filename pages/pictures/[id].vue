<script setup lang="ts">
import dayjs from "dayjs";
import {getPictureById, Picture} from "~/api/pictures";

const route = useRoute();
const {locale} = useI18n();
const data = ref<Picture>({
  id: '',
  title: '',
  description: '',
  images: [],
  datetime: '',
});

const date = computed(() => dayjs(data.value.datetime).format('DD.MM.YYYY'))

onBeforeMount(async () => {
  data.value = await getPictureById(route.params.id as string)
})

watch(locale, async () => {
  data.value = await getPictureById(route.params.id as string)
})
</script>

<template>
  <div class="flex flex-col lg:flex-row text-gray-400">
    <image-carousel :images="data.images" class="basis-1/2 max-h-[636px] w-auto h-full aspect-square mb-4" is-centered/>
    <div class="flex flex-col basis-1/2 lg:ml-10 w-fit">
      <span class="text-2xl text-gray-600 mb-2">{{data.title}}</span>
      <div class="mb-2">{{data.description}}</div>
      <div>{{$t('Date')}}: {{date}}</div>
      <nuxt-link to="/pictures" class="flex justify-end mt-auto">
        <button class="text-accent hover:underline text-2xl">{{$t('Back')}}</button>
      </nuxt-link>
    </div>
  </div>
</template>

<style scoped>

</style>
