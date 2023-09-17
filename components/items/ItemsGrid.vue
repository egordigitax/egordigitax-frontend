<script setup lang="ts">
import {Item} from "~/api/items";
import ItemsCard from "~/components/items/ItemsCard.vue";

interface ICardGridProps {
  route: string,
  items: Item[]
}

defineProps<ICardGridProps>()
const emit = defineEmits(["on-details-click"])
const onDetailsClick = (id: string) => {
  emit("on-details-click", id)
}
</script>

<template>
  <div class="
    grid
    grid-cols-1 lg:grid-cols-2 xl:grid-cols-4
    gap-x-4 gap-y-8
  "
  >
    <items-card
        v-for="card in items"
        :key="card.id"
        :item="card"
        :link="`/${route}/${card.id}`"
        @on-details-click="onDetailsClick(card.id)"
    />
  </div>
</template>

<style scoped>

</style>
