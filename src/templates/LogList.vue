<template lang="pug">
.list-wrapper
  v-list(rounded)
    v-list-item-group(
      :color="color")
      log-card(
        v-for="el in logData"
        :showDelete="showDelete"
        :name="el.name"
        :text="el.text"
        :startTime="el.startTime"
        :endTime="el.endTime"
        @deleteClicked="$refs.delete.open()"
        @editClicked="$refs.edit.open({ startTime:el.startTime, endTime:el.endTime })")
  confirm-dialog(
    ref="delete"
    title="削除しますか？"
    text="削除したデータは今までの記録からも消されます")
  time-dialog(
    ref="edit"
    title="時刻を編集")
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
import LogCard from '@/components/cards/LogCard.vue'
import ConfirmDialog from '@/components/dialogs/ConfirmDialog.vue'
import TimeDialog from '@/components/dialogs/TimeDialog.vue'
export default defineComponent({
  components: { LogCard, ConfirmDialog, TimeDialog },
  props: {
    logData: {
      type: Array,
      default: (): [] => [],
    },
    showDelete: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'white',
    },
  },
})
</script>
