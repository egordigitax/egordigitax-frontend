<script setup lang="ts">
import {Generative, getGenerative, processGenerative} from "~/api/generative";

const data = ref<Generative>({
  items: [],
  description: "",
});

const handleProcess = async ({form, apiUrl}: {form: Record<string, string>, apiUrl: string}) => {
  await processGenerative(form, apiUrl);
}

onBeforeMount(async () => {
  data.value = await getGenerative();
})
</script>

<template>
  <div class="text-gray-400">
    <span class="block mb-5">{{ data.description }}</span>
    <div class="flex flex-col gap-14">
      <generative-card
        v-for="(item, index) in data.items"
        :key="index"
        :image="item.image"
        :title="item.title"
        :description="item.description"
        :api-inputs="item?.api_inputs"
        :api-url="item.api_url"
        :hint="item.hint"
        @on-process="handleProcess"
      />
    </div>
  </div>
</template>

<style scoped>

</style>
