<template lang="pug">
  v-dialog(
    v-model="state.isOpened"
    max-width="290")
    v-card
      v-card-title.headline {{title}}
        v-dialog(
          ref="startPicker" 
          v-model="state.showStartPicker" 
          :return-value.sync="state.startTime" 
          width="344px")
          template(v-slot:activator="{ on, attrs }")
            v-text-field(
              v-model="state.startTime" 
              label="開始時刻" 
              prepend-icon="$clock" 
              readonly="" 
              v-bind="attrs" 
              v-on="on"
              color="light-green")
          v-time-picker(
            v-if="state.showStartPicker" 
            v-model="state.startTime" 
            use-seconds
            scrollable
            format="24hr"
            color="light-green"
            @click:second="$refs.startPicker.save(state.startTime)")
            v-spacer
            v-btn(
              text
              color="light-green" 
              @click="state.showStartPicker = false") キャンセル
            v-btn(
              text
              color="light-green" 
              @click="$refs.startPicker.save(state.startTime)") 決定
        v-dialog(
          ref="endPicker" 
          v-model="state.showEndPicker" 
          :return-value.sync="state.endTime" 
          width="344px")
          template(v-slot:activator="{ on, attrs }")
            v-text-field(
              v-model="state.endTime" 
              label="終了時刻" 
              prepend-icon="$clock" 
              readonly="" 
              v-bind="attrs" 
              v-on="on"
              color="light-green")
          v-time-picker(
            v-if="state.showEndPicker" 
            v-model="state.endTime" 
            use-seconds
            scrollable
            format="24hr"
            color="light-green"
            @click:second="$refs.endPicker.save(state.endTime)")
            v-spacer
            v-btn(
              text
              color="light-green" 
              @click="state.showEndPicker = false") キャンセル
            v-btn(
              text
              color="light-green" 
              @click="$refs.endPicker.save(state.endTime)") 決定
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
      startTime: '',
      showStartPicker: false,
      endTime: '',
      showEndPicker: false,
      isOpened: false,
    })
    return {
      state,
      open({ startTime, endTime }: { startTime: string; endTime: string }) {
        state.startTime = startTime
        state.endTime = endTime
        state.isOpened = true
      },
      buttonClicked(name: string) {
        state.isOpened = false
        context.emit(name, {
          startTime: state.startTime,
          endTime: state.endTime,
        })
      },
    }
  },
})
</script>
