<template lang="pug">
  v-list(rounded)
    v-list-item-group(:color="color")
      user-card(
        v-for="el in userData"
        :showRank="showRank"
        :name="el.name"
        :rank="el.rank")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import UserCard from '@/components/cards/UserCard.vue'
export default defineComponent({
  components: { UserCard },
  props: {
    showRank: {
      type: Boolean,
      default: false,
    },
    userData: {
      type: Array,
      default: (): [] => [],
    },
    color: {
      type: String,
      default: null,
    },
  },
})
</script>
