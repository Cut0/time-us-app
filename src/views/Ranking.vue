<template lang="pug"> 
      v-tabs-items(v-model="tabs.rankingTab")
        v-tab-item(
          v-for="(el,index) in state.sample_userData"
          :key="index")
          v-row(
            justify="center" no-gutters)  
            v-responsive(max-width="598")
              user-list(
                :showRank="true"
                :userData="el"
                color="light-green")
</template>
<script lang="ts">
import { reactive, defineComponent } from '@vue/composition-api'
import UserList from '@/templates/UserList.vue'
export default defineComponent({
  components: { UserList },
  props: {
    tabs: { default: null },
  },
  setup() {
    const state = reactive({
      sample_userData: [
        [
          { rank: 1, name: 'CutRay' },
          { rank: 2, name: 'Kevin' },
          { rank: 3, name: 'Komachi' },
          { rank: 4, name: 'Riku' },
        ],
        [
          { rank: 1, name: 'CutRay' },
          { rank: 2, name: 'Kevin' },
          { rank: 3, name: 'Komachi' },
        ],
        [
          { rank: 1, name: 'CutRay' },
          { rank: 2, name: 'Kevin' },
          { rank: 3, name: 'Komachi' },
          { rank: 4, name: 'Riku' },
        ],
        [
          { rank: 1, name: 'CutRay' },
          { rank: 2, name: 'Kevin' },
          { rank: 3, name: 'Komachi' },
          { rank: 4, name: 'Riku' },
        ],
      ],
    })
    return { state }
  },
})
</script>
