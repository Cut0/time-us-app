<template lang="pug">
  v-list(rounded)
    v-list-item-group(
      :color="color")
      user-card(
        v-for="el in userData"
        :showRank="showRank"
        :name="el.name"
        :rank="el.rank")
</template>

<script>
import UserCard from '@/components/cards/UserCard.vue'
export default {
  components: { UserCard },
  props: {
    showRank: {
      type: Boolean
    },
    userData: {
      type: Array
    },
    color: {
      type: String
    }
  }
}
</script>
