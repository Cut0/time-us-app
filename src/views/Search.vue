<template lang="pug">
v-row(
  no-gutters
  justify="center")  
  v-responsive(
    max-width="498"
    width="375")
    v-container
      v-text-field(
        label="ユーザー名を入力してください"
        prepend-inner-icon="mdi-magnify"
        color="light-green"
        hide-details)
      v-list.mt-2.cover(rounded)
        v-list-item-group(
          v-model="item" 
          color="light-green")
          user-card(
            v-for="el in sample_userData"
            :name="el.name"
            :rank="el.rank")
</template>
<script>
import UserCard from '@/components/UserCard.vue'
export default {
  components: { UserCard },
  data() {
    return {
      sample_userData: [
        { rank: 1, name: 'CutRay' },
        { rank: 2, name: 'Kevin' },
        { rank: 3, name: 'Komachi' },
        { rank: 4, name: 'Riku' },
        { rank: 1, name: 'CutRay' },
        { rank: 2, name: 'Kevin' },
        { rank: 3, name: 'Komachi' },
        { rank: 4, name: 'Riku' },
        { rank: 1, name: 'CutRay' },
        { rank: 2, name: 'Kevin' },
        { rank: 3, name: 'Komachi' },
        { rank: 4, name: 'Riku' },
        { rank: 1, name: 'CutRay' },
        { rank: 2, name: 'Kevin' },
        { rank: 3, name: 'Komachi' },
        { rank: 4, name: 'Riku' },
        { rank: 1, name: 'CutRay' },
        { rank: 2, name: 'Kevin' },
        { rank: 3, name: 'Komachi' },
        { rank: 4, name: 'Riku' }
      ]
    }
  }
}
</script>
<style scoped lang="sass">
.cover
  height: calc(100vh - 180px)
  overflow: scroll
</style>
