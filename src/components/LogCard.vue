<template lang="pug">
    v-list-item(max-width="498")
      span.img-wrapper.mr-4
        img(src="https://i.picsum.photos/id/797/900/400.jpg" alt="" loading="lazy")
      v-list-item-content
        v-list-item-title {{name}}
        v-list-item-subtitle {{text}}
      v-list-item-action
        v-list-item-action-text {{time}}
        v-icon(@click.stop="iconClicked") mdi-delete
</template>

<script>
export default {
  components: {},
  props: {
    name: {
      typw: String
    },
    text: {
      typw: String
    },
    time: {
      typw: String
    }
  },
  computed: {},
  methods: {
    iconClicked() {
      this.$emit('iconClicked')
    }
  },
  data() {
    return {}
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
