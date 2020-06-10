<template lang="pug"> 
div
  v-container.px-6(style="background: #FAFAFA;")
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
      v-row.ml-8(
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
    .caption.my-1
      v-icon(
        size="medium") mdi-link-variant
      a(href="https://portfolio-ray.web.app/") https://portfolio-ray.web.app/
  v-tabs(
    grow
    color="light-green"
    background-color="grey lighten-5")
    v-tab 本日
    v-tab 週間
    v-tab 月間
    v-tab 累計
      
</template>
<style lang="sass" scoped>
.tes
  text-align: center
</style>
