<template lang="pug">
  v-dialog(
    v-model="state.isOpened"
    max-width="290")
    v-card
      v-card-title.headline {{title}}
      v-card-text {{text}}
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
    text: {
      type: String,
      default: '',
    },
  },
  setup(_, context: SetupContext) {
    const state = reactive({
      isOpened: false,
    })
    return {
      state,
      open() {
        state.isOpened = true
      },
      buttonClicked(name: string) {
        state.isOpened = false
        context.emit(name)
      },
    }
  },
})
</script>
