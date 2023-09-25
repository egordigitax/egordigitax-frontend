<script setup lang="ts">
interface IImageCarouselProps {
  images: string[],
  isCentered?: boolean,
  wrapperHeight?: string
}
const props = withDefaults(defineProps<IImageCarouselProps>(), {
  isCentered: false,
})

const currentIndex = ref(0);
const carousel = ref<HTMLDivElement | null>(null);

const offset = computed(() => `transform: translateX(-${currentIndex.value * (carousel?.value?.clientWidth ?? 0)}px)`)
const onMouseMove = (event: MouseEvent) => {
  if (event.target === null || carousel.value === null) return;
  const part = Math.ceil(carousel.value?.offsetWidth / props.images?.length);

  currentIndex.value = Math.floor(event.offsetX / part);
  console.log(currentIndex.value)
}
const resetCurrentIndex = () => currentIndex.value = 0;
</script>

<template>
  <div ref="carousel" class="overflow-hidden relative" @mousemove="onMouseMove" @mouseleave="resetCurrentIndex">
    <div class="flex" :style="offset" :class="`h-[${wrapperHeight}]`">
      <img v-for="(image, index) in images" :key="index" :src="image" :class="{'w-auto': wrapperHeight}" class="w-full h-full object-cover">
    </div>
    <div v-if="images?.length > 1" class="absolute bottom-4 right-4 flex gap-2 w-fit" :class="{ 'left-1/2 -translate-x-1/2': isCentered }">
      <div v-for="(_, index) in images" class="w-2 h-2 rounded-full border-0.5 bg-gray-400" :class="{'bg-white': index === currentIndex}"/>
    </div>
  </div>
</template>

<style>

</style>
