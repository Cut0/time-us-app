<template lang="pug"> 
v-row(
    no-gutters
    justify="center")  
  v-responsive(
    max-width="498"
    width="375")
    v-container.pa-0
      v-tabs-items(v-model="tabs.timerTab")
        v-tab-item(key="0")
          v-card.pb-5
            timer-detail(
            :params="sampleA"
            today-value="00:00:10")
            v-container.mt-6
              v-btn(
                block
                rounded
                color="light-green"
                elevation="3"
                large) 休憩中
        v-tab-item(key="1")
          v-list.cover(rounded)
            v-list-item-group(color="light-green")
              log-card(
                v-for="el in sample_userData"
                :name="el.name"
                :text="el.text"
                :time="el.time"
                @iconClicked="openConfirm")
          confirm-dialog(
            ref="confirm"
            title="削除しますか？"
            text="削除したデータは今までの記録からも消されます")
</template>
<script>
import TimerDetail from '@/components/graphs/TimerDetail.vue'
import LogCard from '@/components/cards/LogCard.vue'
import ConfirmDialog from '@/components/dialogs/ConfirmDialog.vue'
export default {
  components: { TimerDetail, LogCard, ConfirmDialog },
  props: {
    tabs: {}
  },
  data() {
    return {
      sampleA: [
        { label: '勉強', color: '#FF9800', value: 10 },
        { label: '休憩', color: '#8BC34A', value: 10 },
        { label: 'その他', color: '#BDBDBD', value: 10 }
      ],
      sample_userData: [
        { name: 'CutRay', text: '勉強終了', time: '00:00' },
        { name: 'CutRay', text: '勉強開始', time: '00:00' },
        { name: 'CutRay', text: '勉強終了', time: '00:00' }
      ]
    }
  },
  methods: {
    openConfirm() {
      this.$refs.confirm.open()
    }
  }
}
</script>
<style scoped lang="sass">
.v-list-item__icon
  align-self: center
.v-card
  min-height: calc(100vh - 160px)
</style>
