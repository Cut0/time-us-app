<template lang="pug"> 
v-row(
    no-gutters
    justify="center")  
  v-responsive(
    max-width="498"
    width="375")
    v-container.pa-0
      v-tabs(
        grow
        color="light-green"
        background-color="grey lighten-5")
        v-tab(key="0") 本日
        v-tab(key="1") ログ
        v-tab-item(key="0")
          v-card.pb-5
            timer-detail
            v-btn.mt-4(
              block
              rounded
              color="light-green"
              elevation="3"
              large) 休憩中
        v-tab-item(key="1")
          v-list.cover(rounded)
            v-list-item-group( 
              color="light-green")
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
import TimerDetail from '@/components/TimerDetail.vue'
import LogCard from '@/components/LogCard.vue'
import ConfirmDialog from '@/components/ConfirmDialog.vue'
export default {
  components: { TimerDetail, LogCard, ConfirmDialog },
  data() {
    return {
      sample_userData: [
        { name: 'CutRay', text: '勉強終了', time: '00:00' },
        { name: 'CutRay', text: '勉強開始', time: '00:00' },
        { name: 'CutRay', text: '勉強終了', time: '00:00' },
        { name: 'CutRay', text: '勉強開始', time: '00:00' },
        { name: 'CutRay', text: '勉強終了', time: '00:00' },
        { name: 'CutRay', text: '勉強開始', time: '00:00' },
        { name: 'CutRay', text: '勉強終了', time: '00:00' },
        { name: 'CutRay', text: '勉強開始', time: '00:00' },
        { name: 'CutRay', text: '勉強終了', time: '00:00' },
        { name: 'CutRay', text: '勉強開始', time: '00:00' }
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
.cover
  height: calc(100vh - 164px)
  overflow: scroll
</style>
