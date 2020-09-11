<template lang="pug"> 
v-row(
  justify="center"
  no-gutters)  
  v-responsive(
    max-width="598"
    width="375")
      v-card
          v-text-field.my-2(
            v-model="state.email"
            :rules="[state.rules.required, state.rules.email]"
            label="メールアドレス" color="light-green")
          v-text-field.my-2(
            v-model="password"
            @click:append="state.showPassword = !state.showPassword"
            :append-icon="state.showPassword ? '$eye' : '$eyeoff'"
            :rules="[state.rules.required, state.rules.min]"
            :type="state.showPassword ? 'text' : 'password'"
            name="input-10-1" label="パスワード" hint="8文字以上のパスワードにしてください" color="light-green" counter)
          v-btn.my-6(
            to="/"
            color="light-green" elevation="3" block rounded dark large) ログイン
          v-btn.my-4(
            to="/setting"
            color="light-green" elevation="3" large　block　rounded　outlined) アカウント作成          
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
