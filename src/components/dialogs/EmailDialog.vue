<template lang="pug">
  v-dialog(
    v-model="state.isOpened"
    max-width="290")
    v-card
      v-card-title.headline {{title}}
        v-text-field.my-2(
          v-model="state.email"
          :rules="[state.rules.required, state.rules.email]"
          label="メールアドレス" color="light-green")
      v-card-actions
        v-spacer
        v-btn(
          @click="buttonClicked('cancel')"
          color="light-green" text) キャンセル
        v-btn(
          @click="buttonClicked('ok')"
          color="light-green" text) 決定
</template>

<script lang="ts">
import { reactive, SetupContext, defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    title: {
      type: String,
      default: '',
    },
  },
  setup(_, context: SetupContext) {
    const state = reactive({
      isOpened: false,
      email: '',
      rules: {
        required: (value: string) => !!value || '必須項目です',
        email: (value: string) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || '不正なメールアドレスです'
        },
      },
    })
    return {
      state,
      open() {
        state.isOpened = true
      },
      buttonClicked(name: string) {
        state.isOpened = false
        context.emit(name, state.email)
      },
    }
  },
})
</script>
