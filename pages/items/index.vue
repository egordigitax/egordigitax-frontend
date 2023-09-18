<script setup lang="ts">
import {getItems, Items} from "~/api/items";
import ItemsGrid from "~/components/items/ItemsGrid.vue";

const router = useRouter();
const {locale} = useI18n();

const data = ref<Items>({
  description: "",
  items: []
});
onBeforeMount(async () => {
  data.value = await getItems()

})
watch(locale, async () => {
  data.value = await getItems()
})
const onDetailsClick = (id: string) => router.push(`/items/${id}`)
</script>

<template>
  <div class="text-gray-400">
    <span class="block mb-5">{{ data.description }}</span>
    <items-grid route="items" :items="data.items" @on-details-click="onDetailsClick"/>
  </div>
</template>

<style scoped>

</style>
