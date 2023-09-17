<script setup lang="ts">
interface IInputProps {
  modelValue: string
  title: string
  placeholder: string
}

const props = defineProps<IInputProps>()
const emit = defineEmits(['update:modelValue'])

const compValue = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})
</script>

<template>
  <div class="flex flex-col">
    <div class="h-10 bg-accent text-white text-center text-2xl">{{ title }}</div>
    <input
        type="text"
        v-model="compValue"
        :placeholder="placeholder"
        class="
          h-10
          text-gray-400 text-base text-center
          focus:outline-none focus:border-none
          placeholder:text-base placeholder:text-gray-400 placeholder:bg-white placeholder:text-center
        "
    >
  </div>
</template>

<style scoped>

</style>
