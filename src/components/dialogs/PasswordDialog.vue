<template lang="pug">
  v-dialog(
    v-model="isOpened"
    max-width="290")
    v-card
      v-card-title.headline {{title}}
        v-text-field.my-2(
          v-model="password"
          :append-icon="show ? '$eye' : '$eyeoff'"
          :rules="[rules.required, rules.min]"
          :type="show ? 'text' : 'password'"
          name="input-10-1"
          label="パスワード"
          hint="8文字以上のパスワードにしてください"
          counter
          @click:append="show = !show"
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
      this.$emit(name, this.password)
    }
  },
  data() {
    return {
      show: false,
      isOpened: false,
      password: '',
      rules: {
        required: value => !!value || '必須項目です',
        min: v => v.length >= 8 || '8文字以上のパスワードにしてください'
      }
    }
  }
}
</script>
