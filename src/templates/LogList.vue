<template lang="pug">
div
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
        @deleteClicked="openDeleteConfirm"
        @editClicked="openEditDialog")
  confirm-dialog(
    ref="delete"
    title="削除しますか？"
    text="削除したデータは今までの記録からも消されます")
  time-dialog(
    ref="edit"
    title="時間を編集")
</template>

<script>
import LogCard from '@/components/cards/LogCard.vue'
import ConfirmDialog from '@/components/dialogs/ConfirmDialog.vue'
import TimeDialog from '@/components/dialogs/TimeDialog.vue'
export default {
  components: { LogCard, ConfirmDialog, TimeDialog },
  props: {
    logData: {
      type: Array
    },
    showDelete: {
      type: Boolean
    },
    color: {
      type: String
    }
  },
  methods: {
    openDeleteConfirm() {
      this.$refs.delete.open()
    },
    openEditDialog({ startTime, endTime }) {
      this.$refs.edit.open({ startTime, endTime })
    }
  }
}
</script>
