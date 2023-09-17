<script setup lang="ts">

</script>

<template>
  <footer class="flex items-center justify-between text-gray-300 text-2xl">
    <div class="flex items-center gap-7">
      <links-block class="hidden lg:flex"/>
      <nuxt-link class="cursor-pointer text-base">{{$t('Buy me a cup of coffee button')}}</nuxt-link>
    </div>
    <nuxt-link class="cursor-pointer text-base">{{$t('Direct Message')}}</nuxt-link>
  </footer>
</template>

<style scoped>

</style>
