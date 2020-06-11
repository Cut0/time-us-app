<template lang="pug"> 
v-row(
    no-gutters
    justify="center")  
  v-responsive(
    max-width="498"
    width="375")
    v-container.pa-0.py-sm-2
      v-tabs(
        grow
        color="light-green"
        background-color="grey lighten-5")
        v-tab 本日
        v-tab ログ
</template>
