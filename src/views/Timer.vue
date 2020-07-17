<template lang="pug"> 
v-row(
    no-gutters
    justify="center")  
  v-responsive(
    max-width="598"
    width="375")
    v-card
      v-tabs-items(v-model="tabs.timerTab")
        v-tab-item(key="0")
          v-card.pb-5
            timer-detail(
              :params="state.sampleA"
              today-value="00:00:10")
            v-container.mt-6
              v-btn(
                block
                rounded
                color="light-green"
                elevation="3"
                large) 休憩中
        v-tab-item(key="1")
          log-list(
            :showDelete="true"
            :logData="state.sample_userData"
            color="light-green")
</template>
<script lang="ts">
import { reactive, defineComponent } from '@vue/composition-api'
import TimerDetail from '@/components/graphs/TimerDetail.vue'
import LogList from '@/templates/LogList.vue'

export default defineComponent({
  components: { TimerDetail, LogList },
  props: {
    tabs: { default: null },
  },
  setup() {
    const state = reactive({
      sampleA: [
        { label: '勉強', color: '#FF9800', value: 10 },
        { label: '休憩', color: '#8BC34A', value: 10 },
        { label: 'その他', color: '#BDBDBD', value: 10 },
      ],
      sample_userData: [
        {
          name: 'CutRay',
          text: '勉強',
          startTime: '01:00',
          endTime: '23:59',
        },
        {
          name: 'CutRay',
          text: '勉強',
          startTime: '02:00',
          endTime: '23:59',
        },
        {
          name: 'CutRay',
          text: '勉強',
          startTime: '03:00',
          endTime: '24:59',
        },
        {
          name: 'CutRay',
          text: '勉強',
          startTime: '00:00',
          endTime: '23:59',
        },
        {
          name: 'CutRay',
          text: '勉強',
          startTime: '00:00',
          endTime: '23:59',
        },
        {
          name: 'CutRay',
          text: '勉強',
          startTime: '00:00',
          endTime: '23:59',
        },
        {
          name: 'CutRay',
          text: '勉強',
          startTime: '00:00',
          endTime: '23:59',
        },
        {
          name: 'CutRay',
          text: '勉強',
          startTime: '00:00',
          endTime: '23:59',
        },
      ],
    })
    return { state }
  },
})
</script>
<style scoped lang="sass">
.v-list-item__icon
  align-self: center
.v-card
  min-height: calc(100vh - 160px)
</style>
