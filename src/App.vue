<template lang="pug">
  v-app(style="background: #FAFAFA;")
    v-app-bar(
      app
      fixed
      dark
      color="light-green")
      template(v-if="$route.name!=='検索'")
        v-app-bar-nav-icon
          v-icon(v-if="$route.name==='タイマー'") $clockOutline
          v-icon(v-if="$route.name==='ランキング'") $crownOutline
          v-icon(v-if="$route.name==='プロフィール'") $accountOutline
          v-icon(v-if="$route.name==='サインイン'") $login
          v-icon(v-if="$route.name==='プロフィール設定'") $faceProfile
          v-btn(
            icon
            v-if="$route.name==='アカウント設定'"
            to='/1')
            v-icon $allowLeft
        v-toolbar-title {{this.$route.name}}
        v-spacer
        v-btn(
          icon
          v-if="$route.name==='プロフィール'"
          to='/config')
          v-icon $cog
      v-text-field.mx-sm-12.px-sm-12(
        placeholder="ユーザー名で検索"
        prepend-inner-icon="$magnify"
        hide-details
        outlined
        rounded
        dense
        clearable
        color="white"
        v-if="$route.name==='検索'")
      template(
        v-slot:extension
        v-if="($route.name==='ランキング'||$route.name==='タイマー')")
        v-tabs(
          v-model="tabs.timerTab"
          fixed-tabs
          centered
          v-if="$route.name==='タイマー'")
          v-tab(key="0") 本日
          v-tab(key="1") ログ
        v-tabs(
          v-model="tabs.rankingTab"
          fixed-tabs
          centered
          v-if="$route.name==='ランキング'")
          v-tab(key="0") 本日
          v-tab(key="1") 週間
          v-tab(key="2") 月間
          v-tab(key="3") 累計
    v-main
      router-view(:tabs="tabs")
    v-bottom-navigation(
      fixed
      grow
      color="light-green"
      background-color="grey lighten-5")
      v-btn(to="/")
        v-icon $clock
      v-btn(to="/search")
        v-icon $magnify
      v-btn(to="/ranking")
        v-icon $crown
      v-btn(to="/1")
        v-icon $account
</template>

<script>
export default {
  data() {
    return {
      tabs: { rankingTab: {}, timerTab: {} }
    }
  }
}
</script>
<style lang="sass">
.v-main
  padding-bottom: 56px !important
.v-input
  max-width: 600px !important
.v-toolbar__content
  justify-content: center
</style>
