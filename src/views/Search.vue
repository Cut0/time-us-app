<template lang="pug">
v-row(
  no-gutters
  justify="center")  
  v-responsive(max-width="598")
    v-card
      user-list(
        :showRank="false"
        :userData="state.sample_userData"
        color="light-green")
</template>
<script lang="ts">
import { reactive, defineComponent } from '@vue/composition-api'
import UserList from '@/templates/UserList.vue'
export default defineComponent({
  components: { UserList },
  setup() {
    const state = reactive({
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
        { rank: 4, name: 'Riku' },
      ],
    })
    return { state }
  },
})
</script>
