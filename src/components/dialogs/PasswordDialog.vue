<template lang="pug">
  v-dialog(
    v-model="state.isOpened"
    max-width="290")
    v-card
      v-card-title.headline {{title}}
        v-text-field.my-2(
          v-model="state.password"
          @click:append="state.show = !state.show"
          :append-icon="state.show ? '$eye' : '$eyeoff'"
          :rules="[state.rules.required, state.rules.min]"
          :type="state.show ? 'text' : 'password'"
          name="input-10-1" label="パスワード" hint="8文字以上のパスワードにしてください" color="light-green" counter)
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
      show: false,
      isOpened: false,
      password: '',
      rules: {
        required: (value: string) => !!value || '必須項目です',
        min: (value: string) =>
          value.length >= 8 || '8文字以上のパスワードにしてください',
      },
    })
    return {
      state,
      open() {
        state.isOpened = true
      },
      buttonClicked(name: string) {
        state.isOpened = false
        context.emit(name, state.password)
      },
    }
  },
})
</script>
