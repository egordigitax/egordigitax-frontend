<script setup lang="ts">
import {MainItem} from "~/api/main";
import MainStoryGallery from "~/components/main/MainStoryGallery.vue";

interface IMainPromoCard {
  item: MainItem,
  link: string
}

const router = useRouter();
const props = defineProps<IMainPromoCard>()
const redirectToLink = () => router.push(props.link)
</script>

<template>
  <div class="flex flex-col max-w-screen w-full h-auto">
    <main-promo-block
        v-if="item.images?.length === 1"
        :item="item"
        class="mb-6 cursor-pointer"
        @click="redirectToLink"
    />
    <main-story-gallery
        v-else-if="item.images?.length > 1 && item.type === 'story-gallery'"
        :item="item"
        class="mb-6 cursor-pointer"
        @click="redirectToLink"
    />
    <main-gallery
        v-else-if="item.images?.length > 1 && item.type === 'gallery'"
        :item="item"
        class="mb-6 cursor-pointer"
        @click="redirectToLink"
    />
    <div class="flex flex-col lg:flex-row">
      <div class="basis-1/2">
        <nuxt-link :to="link" class="text-2xl text-gray-500 mb-2 hover:underline">{{ item.title }}</nuxt-link>
        <div>{{ item.description }}</div>
      </div>
      <div class="flex items-end ml-auto">
        <nuxt-link :to="link" class="cursor-pointer text-accent hover:underline text-2xl">{{ $t('Show more') }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>
