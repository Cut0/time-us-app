<template lang="pug">
  v-dialog(
    v-model="isOpened"
    max-width="290")
    v-card
      v-card-title.headline {{title}}
        v-dialog(
          ref="startPicker" 
          v-model="showStartPicker" 
          :return-value.sync="startTime" 
          width="344px")
          template(v-slot:activator="{ on, attrs }")
            v-text-field(
              v-model="startTime" 
              label="開始時刻" 
              prepend-icon="$clock" 
              readonly="" 
              v-bind="attrs" 
              v-on="on"
              color="light-green")
          v-time-picker(
            v-if="showStartPicker" 
            v-model="startTime" 
            use-seconds
            scrollable
            format="24hr"
            color="light-green"
            @click:second="$refs.startPicker.save(startTime)")
            v-spacer
            v-btn(
              text
              color="light-green" 
              @click="showStartPicker = false") キャンセル
            v-btn(
              text
              color="light-green" 
              @click="$refs.startPicker.save(startTime)") 決定
        v-dialog(
          ref="endPicker" 
          v-model="showEndPicker" 
          :return-value.sync="endTime" 
          width="344px")
          template(v-slot:activator="{ on, attrs }")
            v-text-field(
              v-model="endTime" 
              label="終了時刻" 
              prepend-icon="$clock" 
              readonly="" 
              v-bind="attrs" 
              v-on="on"
              color="light-green")
          v-time-picker(
            v-if="showEndPicker" 
            v-model="endTime" 
            use-seconds
            scrollable
            format="24hr"
            color="light-green"
            @click:second="$refs.endPicker.save(endTime)")
            v-spacer
            v-btn(
              text
              color="light-green" 
              @click="showEndPicker = false") キャンセル
            v-btn(
              text
              color="light-green" 
              @click="$refs.endPicker.save(endTime)") 決定
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
    open({ startTime, endTime }) {
      this.startTime = startTime
      this.endTime = endTime
      this.isOpened = true
    },
    buttonClicked(name) {
      this.isOpened = false
      this.$emit(name, { startTime: this.startTime, endTime: this.endTime })
    }
  },
  data() {
    return {
      startTime: null,
      showStartPicker: false,
      endTime: null,
      showEndPicker: false,
      isOpened: false
    }
  }
}
</script>
