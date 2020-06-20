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
        :time="el.time"
        @iconClicked="openConfirm")
  confirm-dialog(
    ref="confirm"
    title="削除しますか？"
    text="削除したデータは今までの記録からも消されます")
</template>

<script>
import LogCard from '@/components/cards/LogCard.vue'
import ConfirmDialog from '@/components/dialogs/ConfirmDialog.vue'
export default {
  components: { LogCard, ConfirmDialog },
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
    openConfirm() {
      this.$refs.confirm.open()
    }
  }
}
</script>
