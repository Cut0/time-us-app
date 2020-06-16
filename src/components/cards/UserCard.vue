<template lang="pug">
    v-list-item(max-width="498" @click="clicked")
      v-list-item-icon(v-if="showRank")
        v-list-item-title {{rank}}
      v-list-item-content
        v-list-item-title {{name}}
      span.img-wrapper
        img(src="https://picsum.photos/200/300" alt="" loading="lazy")
</template>

<script>
export default {
  props: {
    showRank: {
      type: Boolean,
      default: false
    },
    rank: {
      type: Number
    },
    name: {
      type: String
    }
  },
  methods: {
    clicked() {
      this.$emit('clicked')
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
