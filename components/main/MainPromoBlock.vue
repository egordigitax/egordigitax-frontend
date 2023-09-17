<script setup lang="ts">
  import {MainItem} from "~/api/main";

  interface IMainPromoBlockProps {
    item: MainItem
  }
  defineProps<IMainPromoBlockProps>()
</script>

<template>
  <div
      class="
          aspect-[0.5]
          h-[636px] sm:h-[372px]
          flex justify-center mb-4
        "
  >
    <img :src="item.images[0]" class="w-full object-cover h-full" alt="promo-image">
  </div>
</template>

<style scoped>

</style>
