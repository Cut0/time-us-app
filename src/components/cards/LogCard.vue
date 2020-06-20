<template lang="pug">
    v-list-item(max-width="598")
      span.img-wrapper.mr-4
        img(src="https://picsum.photos/200/300" alt="" loading="lazy")
      v-list-item-content
        v-list-item-title {{name}}
        v-list-item-subtitle {{text}}({{startTime}}〜{{endTime}})
      v-list-item-action
        v-row.mr-2
          v-icon.mr-4(
            v-if="showDelete"
            @click.stop="editClicked") $pencil
          v-icon(
            v-if="showDelete"
            @click.stop="deleteClicked") $delete
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    text: {
      type: String
    },
    startTime: {
      type: String
    },
    endTime: {
      type: String
    },
    showDelete: {
      type: Boolean
    }
  },
  methods: {
    deleteClicked() {
      this.$emit('deleteClicked')
    },
    editClicked() {
      this.$emit('editClicked', {
        startTime: this.startTime,
        endTime: this.endTime
      })
    }
  }
}
</script>

<style scoped lang="sass">
.img-wrapper
  width: 40px
  height: 40px
  position: relative
.img-wrapper > img
  position: absolute
  top: 50%
  left: 50%
  width: 40px
  height: 40px
  object-fit: cover
  transform: translate(-50%, -50%)
  -webkit-transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
  border-radius: 50%
  background-color: grey
</style>
