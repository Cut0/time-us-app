<template lang="pug">
.tes
  v-app
    v-app-bar(
      app
      fixed
      dense
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
      shift
      color="light-green")
      v-btn(to="/timer")
        span Timer
        v-icon mdi-clock
      v-btn(to="/search")
        span Search
        v-icon mdi-magnify
      v-btn(to="/ranking")
        span Ranking
        v-icon mdi-crown
      v-btn(to="/1")
        span Profile
        v-icon mdi-account
</template>

<script>
export default {
  name: 'App'
}
</script>
