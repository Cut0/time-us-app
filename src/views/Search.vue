<template lang="pug">
v-row(
  no-gutters
  justify="center")  
  v-responsive(max-width="498")
    v-container.pa-0
      user-list(
        :showRank="true"
        :userData="sample_userData"
        color="light-green")
</template>
<script>
import UserList from '@/templates/UserList.vue'
export default {
  components: { UserList },
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
