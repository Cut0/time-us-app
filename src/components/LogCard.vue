<template lang="pug">
    v-list-item(max-width="498")
      v-list-item-avatar
        v-img(
          eager
          width=100
          height=100
          src="https://i.picsum.photos/id/797/900/400.jpg")
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

<style scoped></style>
