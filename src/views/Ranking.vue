<template lang="pug"> 
v-row(
    no-gutters
    justify="center")  
  v-responsive(
    max-width="498")
    v-container.pa-0
      v-tabs(
        grow
        color="light-green"
        background-color="grey lighten-5")
        v-tab(key="0") 本日
        v-tab(key="1") 週間
        v-tab(key="2") 月間
        v-tab(key="3") 累計
        v-tab-item(key="0") 
          v-list.cover(rounded)
            v-list-item-group(
              v-model="item" 
              color="light-green")
              user-card(
                v-for="el in sample_userData"
                :name="el.name"
                :rank="el.rank")
        v-tab-item(key="1")
          v-list.cover(rounded)
            v-list-item-group(
              v-model="item" 
              color="light-green")
              user-card(
                v-for="el in sample_userData"
                :name="el.name"
                :rank="el.rank")
        v-tab-item(key="2") 
          v-list.cover(rounded)
            v-list-item-group(
              v-model="item" 
              color="light-green")
              user-card(
                v-for="el in sample_userData"
                :name="el.name"
                :rank="el.rank")
        v-tab-item(key="2") 
          v-list.cover(rounded)
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
  height: calc(100vh - 164px)
  overflow: scroll
</style>
