<template lang="pug">
    v-list-item(max-width="498" @click="clicked")
      v-list-item-icon
        v-list-item-title {{rank}}
      v-list-item-content
        v-list-item-title {{name}}
      span.img-wrapper
        img(src="https://i.picsum.photos/id/797/900/400.jpg" alt="" loading="lazy")
</template>

<script>
export default {
  components: {},
  props: {
    rank: {
      type: Number,
      required: true
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
</style>
