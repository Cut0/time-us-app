<template lang="pug">
  v-app
    v-app-bar(
      app
      fixed
      dark
      color="light-green")
      v-app-bar-nav-icon
      v-toolbar-title {{this.$route.name}}
      v-spacer
    v-content
      router-view
    v-bottom-navigation(
      fixed
      grow
      color="light-green"
      background-color="grey lighten-5")
      v-btn(to="/timer")
        v-icon mdi-clock
      v-btn(to="/search")
        v-icon mdi-magnify
      v-btn(to="/ranking")
        v-icon mdi-crown
      v-btn(to="/1")
        v-icon mdi-account
</template>

<script>
export default {
  name: 'App',
  created() {
    switch (this.$route.name) {
      case 'サインイン':
        break
      case '設定':
        break
      case '検索':
        break
      case 'ランキング':
        break
      case 'プロフィール':
        break
    }
  }
}
</script>
