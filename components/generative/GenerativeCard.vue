<script setup lang="ts">

import {GenerativeApiInputs, GenerativeItem} from "~/api/generative";

interface IGenerativeCardProps {
  title: string;
  description: string;
  image: string;
  apiUrl: string;
  apiInputs?: GenerativeApiInputs[];
  hint: string;
}
const props = defineProps<IGenerativeCardProps>()
const emit = defineEmits(['on-process'])

const defaultForm = (fields: GenerativeApiInputs[]) => fields
    .reduce((acc, el) => {
      const result = {...acc}
      result[el.title] = ''
      return result
    }, {} as Record<string, string>)

const form = reactive(defaultForm(props.apiInputs || []))

const onProcessClick = () => {
  emit('on-process', {form, apiUrl: props.apiUrl})
}

</script>

<template>
  <div class="flex md:flex-row flex-col">
    <img :src="image" alt="" class="md:w-[370px] md:h-[370px] aspect-square w-full h-full mb-2">
    <div class="flex flex-col md:ml-12 w-full">
      <span class="text-2xl text-gray-600 mb-2">{{title}}</span>
      <p class="mb-4">{{description}}</p>
      <form class="flex flex-col lg:grid lg:grid-cols-3 gap-x-4 gap-y-2">
        <title-input
            class="col-span-1"
            v-for="input in apiInputs"
            :key="input.title"
            v-model="form[input.title]"
            :title="input.title"
            :placeholder="input.description"
        />
      </form>
      <div class="mt-auto flex justify-center lg:justify-between">
        <span class="hidden lg:block text-sm">{{$t('Press')}}</span>
        <button class="text-accent hover:underline text-2xl" @click="onProcessClick">{{$t('Process')}}</button>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
