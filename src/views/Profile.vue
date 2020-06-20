<template lang="pug"> 
v-row(
    no-gutters
    justify="center")  
  v-responsive(
    max-width="598" 
    width="375")
    v-card.mx-sm-3.mt-sm-5.mb-sm-1
      v-container
        v-row.my-1(
          no-gutters
          align="center"
          justify="start")
          span.img-wrapper
            img(src="https://picsum.photos/200/300" alt="" loading="lazy")
          v-row.ml-8.mt-6(
            no-gutters
            align="center"
            justify="space-around")
            v-col(
              no-gutters
              align="center")
              .subtitle-1 本日
              .subtitle-1 00:00
            v-col(
              no-gutters
              align="center")
              .subtitle-1 累計
              .subtitle-1 00:00
        .title Cut Ray
        .body-2.my-1
          span 工学部情報工学科ああああああああああああああ大学行きたくねえええええええええええええ
        .body-2.my-2
          v-icon(
            size="18") $linkVariant
          a.ml-2(href="https://portfolio-ray.web.app/") https://portfolio-ray.web.app/
        v-menu.my-2(v-model="calendar" :close-on-content-click="false" :nudge-right="40" transition="scale-transition" min-width="290px")
          template(v-slot:activator="{ on, attrs }")
            v-text-field.body-2(
              v-model="date" 
              v-bind="attrs" 
              v-on="on"
              dense
              hide-details
              color="light-green")
              v-icon(
                slot="prepend"
                size="18") $calendar
          v-date-picker(
            v-model="date" 
            @input="calendar= false"
            no-title
            scrollable)
        v-btn.mt-6.mb-2(
          block
          outlined
          color="light-green"
          to="/setting") プロフィール編集
      v-container.pa-0.py-sm-2
        v-tabs(
          grow
          center
          color="light-green")
          v-tab(key="0") 詳細
          v-tab(key="1") 推移
          v-tab-item(key="0")
            timer-detail(
              :params="sampleA"
              today-value="00:00:10")
          v-tab-item(key="1") 
            timer-transition(:params="sampleB")
</template>
<script>
import TimerDetail from '@/components/graphs/TimerDetail.vue'
import TimerTransition from '@/components/graphs/TimerTransition.vue'
export default {
  components: { TimerDetail, TimerTransition },
  data() {
    return {
      date: new Date().toISOString().substr(0, 10),
      calendar: false,
      sampleA: [
        { label: '勉強', color: '#FF9800', value: 10 },
        { label: '休憩', color: '#8BC34A', value: 10 },
        { label: 'その他', color: '#BDBDBD', value: 10 }
      ],
      sampleB: [
        { label: '勉強', color: '#FF9800', date: 0, value: 10 },
        { label: 'その他', color: '#8BC34A', date: 0, value: 10 },
        { label: '勉強', color: '#FF9800', date: 1, value: 20 },
        { label: 'その他', color: '#8BC34A', date: 1, value: 15 },
        { label: '勉強', color: '#FF9800', date: 2, value: 40 },
        { label: 'その他', color: '#8BC34A', date: 3, value: 5 }
      ]
    }
  }
}
</script>
<style scoped lang="sass">
.img-wrapper
  width: 100px
  height: 100px
  position: relative
.img-wrapper > img
  position: absolute
  top: 50%
  left: 50%
  width: 100px
  height: 100px
  object-fit: cover
  transform: translate(-50%, -50%)
  -webkit-transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
  border-radius: 50%
  background-color: grey
</style>
