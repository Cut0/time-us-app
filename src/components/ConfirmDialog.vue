<template lang="pug">
  v-dialog(v-model="isOpened" max-width="290")
    v-card
      v-card-title.headline {{title}}
      v-card-text {{text}}
      v-card-actions
        v-spacer
        v-btn(
          text
          color="light-green" 
          @click="buttonClicked('cancel')")
          | キャンセル
        v-btn(
          text
          color="light-green" 
          @click="buttonClicked('ok')")
          | 決定
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    text: {
      type: String
    }
  },
  methods: {
    open() {
      this.isOpened = true
    },
    buttonClicked(name) {
      this.isOpened = false
      this.$emit(name)
    }
  },
  data() {
    return { isOpened: false }
  }
}
</script>

<style scoped></style>
