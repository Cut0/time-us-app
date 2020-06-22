<template lang="pug"> 
v-row(
  no-gutters
  justify="center")  
  v-responsive(
    max-width="598"
    width="375")
      v-card.mx-sm-3.mt-sm-5.mb-sm-1.py-1.px-5
          v-text-field.my-2(
            label="メールアドレス"
            v-model="state.email"
            :rules="[state.rules.required, state.rules.email]"
            color="light-green")
          v-text-field.my-2(
            v-model="password"
            :append-icon="state.showPassword ? '$eye' : '$eyeoff'"
            :rules="[state.rules.required, state.rules.min]"
            :type="state.showPassword ? 'text' : 'password'"
            name="input-10-1"
            label="パスワード"
            hint="8文字以上のパスワードにしてください"
            counter
            @click:append="state.showPassword = !state.showPassword"
            color="light-green")
          v-btn.my-6(
            block
            rounded
            dark
            color="light-green"
            elevation="3"
            large
            to="/") ログイン
          v-btn.my-4(
            block
            rounded
            outlined
            color="light-green"
            elevation="3"
            large
            to="/setting") アカウント作成          
</template>
<script lang="ts">
import { reactive, defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const state = reactive({
      showPassword: false,
      email: '',
      password: '',
      rules: {
        required: (value: string) => !!value || '必須項目です',
        min: (value: string) =>
          value.length >= 8 || '8文字以上のパスワードにしてください',
        email: (value: string) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '不正なメールアドレスです'
        },
      },
    })
    return { state }
  },
})
</script>
<style scoped lang="sass">
.v-card
  min-height: calc(100vh - 120px)
</style>
