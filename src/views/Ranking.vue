<template lang="pug"> 
v-row(
    no-gutters
    justify="center")  
  v-responsive(
    max-width="498")
    v-container.pa-0
      v-tabs-items(v-model="tabs.rankingTab")
        v-tab-item(
          v-for="el in [...Array(4)].map((v, i)=> i)"
          :key="el") 
          user-list(
            :showRank="true"
            :userData="sample_userData"
            color="light-green")
</template>
<script>
import UserList from '@/templates/UserList.vue'
export default {
  components: { UserList },
  props: {
    tabs: {}
  },
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
