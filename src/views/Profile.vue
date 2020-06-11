<template lang="pug"> 
v-row(
    no-gutters
    justify="center")  
  v-responsive(
    max-width="498" 
    width="375")
    v-container.px-6.py-1
      v-row.my-1(
        no-gutters
        align="center"
        justify="start")
        v-avatar(
          color="grey"
          size="84")
          v-img(
            eager
            width=200
            height=200
            src="https://i.picsum.photos/id/797/900/400.jpg")
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
          size="medium") mdi-link-variant
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
              size="medium") mdi-calendar
        v-date-picker(
          v-model="date" 
          @input="calendar= false"
          no-title scrollable)
    v-container.pa-0.py-sm-2
      v-tabs(
        grow
        center
        show-arrows
        color="light-green"
        background-color="grey lighten-5")
        v-tab(key="0") 詳細
        v-tab(key="1") 推移
        v-tab-item(key="0")
          timer-detail
        v-tab-item(key="1") 
          timer-transition
      
</template>
<script>
import TimerDetail from '@/components/TimerDetail.vue'
import TimerTransition from '@/components/TimerTransition.vue'
export default {
  components: { TimerDetail, TimerTransition },
  data: () => ({
    date: new Date().toISOString().substr(0, 10),
    calendar: false
  })
}
</script>
<style lang="sass" scoped></style>
