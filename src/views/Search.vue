<template lang="pug">
v-row(
  no-gutters
  justify="center")  
  v-responsive(
    max-width="498"
    width="375")
    v-container
      v-text-field(
        label="ユーザー名を入力してください"
        prepend-inner-icon="mdi-magnify"
        color="light-green"
        hide-details)
</template>
