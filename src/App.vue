<template lang="pug">
  v-app
    v-navigation-drawer(
      v-if="!$vuetify.breakpoint.xs"　
      color="light-green" app fixed permanent touchless dark)
      v-list.py-0
        v-list-item(@click="pageMove('/1')")
          v-list-item-avatar
            img(src="https://picsum.photos/200/300")
          v-list-item-content
            v-list-item-title CutRay
            v-list-item-subtitle Subtext
        v-divider
        v-list-item-group
          v-list-item(@click="pageMove('/')")
            v-list-item-icon
              v-icon  $crown
            v-list-item-content
              v-list-item-title ランキング
          v-list-item(@click="pageMove('/1/timer')")
            v-list-item-icon
              v-icon  $clockOutline
            v-list-item-content
              v-list-item-title タイマー
          v-list-item(@click="pageMove('/search')")
            v-list-item-icon
              v-icon  $magnify
            v-list-item-content
              v-list-item-title ユーザー検索
          v-list-item(@click="pageMove('/1/config')")
            v-list-item-icon
              v-icon  $cog
            v-list-item-content
              v-list-item-title アカウント設定
    v-app-bar(color="light-green" app fixed dark)
      template(v-if="$route.name!=='検索'")
        v-app-bar-nav-icon
          v-icon(v-if="$route.name==='タイマー'") $clockOutline
          v-icon(v-if="$route.name==='ランキング'") $crownOutline
          v-icon(v-if="$route.name==='プロフィール'") $accountOutline
          v-icon(v-if="$route.name==='サインイン'") $login
          v-icon(v-if="$route.name==='プロフィール編集'") $faceProfile
          v-btn(
            v-if="$route.name==='アカウント設定'"
            to='/1' icon)
            v-icon $allowLeft
        v-toolbar-title {{this.$route.name}}
        v-spacer
        v-btn(
          v-if="$route.name==='プロフィール'"
          to='/1/config' icon) 
          v-icon $cog
      v-text-field.mx-sm-12.px-sm-12(
        v-if="$route.name==='検索'"
        placeholder="ユーザー名で検索" prepend-inner-icon="$magnify" color="white" hide-details outlined rounded dense clearable)
      template(
        v-if="($route.name==='ランキング'||$route.name==='タイマー')"
        v-slot:extension)
        v-tabs(
          v-if="$route.name==='タイマー'"
          v-model="state.tabs.timerTab"
          fixed-tabs centered)
          v-tab(key="0") 本日
          v-tab(key="1") ログ
        v-tabs(
          v-if="$route.name==='ランキング'"
          v-model="state.tabs.rankingTab"
          fixed-tabs centered)
          v-tab(key="0") 本日
          v-tab(key="1") 週間
          v-tab(key="2") 月間
          v-tab(key="3") 累計
    v-main
      router-view(:tabs="state.tabs")
    v-bottom-navigation(
      v-if="$vuetify.breakpoint.xs"
      background-color="light-green" color="white" app fixed grow dark)
      v-btn(to="/")
        v-icon $crown
      v-btn(to="/1/timer")
        v-icon $clock
      v-btn(to="/search")
        v-icon $magnify
      v-btn(to="/1")
        v-icon $account
</template>

<script lang="ts">
import { reactive, SetupContext, defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup(_, context: SetupContext) {
    const state = reactive({ tabs: { rankingTab: {}, timerTab: {} } })
    return {
      state,
      pageMove(path: string) {
        if (path !== context.root.$route.path) context.root.$router.push(path)
      },
    }
  },
})
</script>
<style lang="sass">
.v-main
  padding-bottom: 56px !important
.v-input
  max-width: 600px !important
.v-toolbar__content
  justify-content: center
</style>
