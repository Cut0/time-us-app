<template lang="pug">
    v-list-item(max-width="498")
      v-list-item-icon
        v-list-item-title {{rank}}
      v-list-item-content
        v-list-item-title {{name}}
      v-list-item-avatar
        v-img(
          eager
          width=100
          height=100
          src="https://i.picsum.photos/id/797/900/400.jpg")
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
      typw: String
    }
  },
  computed: {},
  methods: {},
  data() {
    return {}
  }
}
</script>

<style scoped></style>
