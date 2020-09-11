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
              v-bind="attrs" 
              v-on="on"
              label="開始時刻" prepend-icon="$clock" readonly="" color="light-green")
          v-time-picker(
            v-if="state.showStartPicker" 
            v-model="state.startTime"
            @click:second="$refs.startPicker.save(state.startTime)" 
            format="24hr" color="light-green" use-seconds　scrollable)
            v-spacer
            v-btn(
              @click="state.showStartPicker = false"
              color="light-green" text) キャンセル
            v-btn(
              @click="$refs.startPicker.save(state.startTime)"
              color="light-green" text) 決定
        v-dialog(
          ref="endPicker" 
          v-model="state.showEndPicker" 
          :return-value.sync="state.endTime" 
          width="344px")
          template(v-slot:activator="{ on, attrs }")
            v-text-field(
              v-model="state.endTime" 
              v-bind="attrs" 
              v-on="on"
              label="終了時刻" prepend-icon="$clock" readonly="" color="light-green")
          v-time-picker(
            v-if="state.showEndPicker" 
            v-model="state.endTime"
            @click:second="$refs.endPicker.save(state.endTime)" 
            use-seconds scrollable format="24hr" color="light-green")
            v-spacer
            v-btn(
              @click="state.showEndPicker = false"
              color="light-green" text) キャンセル
            v-btn(
              @click="$refs.endPicker.save(state.endTime)"
              text color="light-green") 決定
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
