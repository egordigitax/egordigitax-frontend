<script setup lang="ts">

import ItemsGrid from "~/components/items/ItemsGrid.vue";
import {mockPictures} from "~/const/mockPictures";
import {getPictures, Pictures} from "~/api/pictures";

const router = useRouter();
const {locale} = useI18n();
const data = ref<Pictures>(mockPictures);

onBeforeMount(async () => {
  data.value = await getPictures()
})

const onDetailsClick = (id: string) => router.push(`/pictures/${id}`)

watch(locale, async () => {
  data.value = await getPictures()
})
</script>

<template>
  <div class="text-gray-400">
    <span class="block mb-5">{{ data.description }}</span>
    <items-grid route="pictures" :items="data.items" @on-details-click="onDetailsClick"/>
  </div>
</template>

<style scoped>

</style>
