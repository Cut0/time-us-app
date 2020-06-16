<template lang="pug">
  v-dialog(
    v-model="isOpened"
    max-width="290")
    v-card
      v-card-title.headline {{title}}
        v-text-field.my-2(
          label="メールアドレス"
          v-model="email"
          :rules="[rules.required, rules.email]"
          color="light-green")
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
    }
  },
  methods: {
    open() {
      this.isOpened = true
    },
    buttonClicked(name) {
      this.isOpened = false
      this.$emit(name, this.email)
    }
  },
  data() {
    return {
      isOpened: false,
      email: '',
      rules: {
        required: value => !!value || '必須項目です',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '不正なメールアドレスです'
        }
      }
    }
  }
}
</script>
