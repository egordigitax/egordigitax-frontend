<script setup lang="ts">

import {getMainItems, MainItems} from "~/api/main";
import MainCard from "~/components/main/MainCard.vue";


const data = ref<MainItems>({
  items: [],
  description: "",
});
const {locale} = useI18n();

onBeforeMount(async () => {
  data.value = await getMainItems()
})
watch(locale, async () => {
  data.value = await getMainItems()
})
</script>

<template>
  <div class="text-gray-400">
    <span class="block mb-5">{{ data.description}}</span>
    <div class="flex items-center flex-col gap-20">
    <main-card
        v-for="(item, index) in data.items"
        :item="item"
        :link="item.url"
        :key="index"
    />
    </div>
  </div>
</template>

<style scoped>

</style>
