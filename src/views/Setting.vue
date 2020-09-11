<template lang="pug"> 
v-row(justify="center" no-gutters)  
  v-responsive(max-width="598" width="375")
          v-row.mt-4.mb-8(align="center" justify="center" no-gutters)
            span.img-wrapper
              img(
                v-if="state.uploadImageUrl" 
                :src="state.uploadImageUrl")
          v-file-input(
            v-model="state.input_image"
            @change="onImagePicked"
            accept="image/*"
            show-size label="画像ファイルをアップロード" color="light-green" prepend-icon="$image")
          v-text-field.my-2(
            v-model="state.name"
            :rules="[state.rules.required]"
            label="ニックネーム" color="light-green" prepend-icon="$accountOutline")
          v-text-field.my-2(
            v-model="state.bio"
            label="bio" color="light-green" prepend-icon="$bio")
          v-text-field.my-2(
            v-model="state.web"
            label="ウェブサイト" color="light-green" prepend-icon="$linkVariant")
          v-btn.my-6(
            to="/1"
            color="light-green" elevation="3" large block rounded dark) プロフィール決定      
</template>
<script lang="ts">
import { reactive, defineComponent } from '@vue/composition-api'
export default defineComponent({
  setup() {
    const state = reactive({
      name: '',
      bio: '',
      web: '',
      input_image: null,
      uploadImageUrl: '',
      rules: {
        required: (value: string) => !!value || '必須項目です',
      },
    })
    return {
      state,
      onImagePicked(file: File) {
        if (file !== undefined && file !== null) {
          if (file.name.lastIndexOf('.') <= 0) return
          const fr = new FileReader()
          fr.readAsDataURL(file)
          fr.addEventListener(
            'load',
            () => (state.uploadImageUrl = fr.result as string)
          )
        } else state.uploadImageUrl = ''
      },
    }
  },
})
</script>
<style scoped lang="sass">
.v-card
  min-height: calc(100vh - 120px)
.img-wrapper
  width: 100px
  height: 100px
  position: relative
  border-radius: 50%
  background-color: grey
.img-wrapper > img
  position: absolute
  top: 50%
  left: 50%
  width: 100px
  height: 100px
  object-fit: cover
  transform: translate(-50%, -50%)
  -webkit-transform: translate(-50%, -50%)
  -ms-transform: translate(-50%, -50%)
  border-radius: 50%
</style>
