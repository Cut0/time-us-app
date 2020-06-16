<template lang="pug"> 
v-row(
  no-gutters
  justify="center")  
  v-responsive(
    max-width="498"
    width="375")
      v-card
        v-container
          v-row.mt-4.mb-8(
            no-gutters
            align="center"
            justify="center")
            span.img-wrapper
              img(
                v-if="uploadImageUrl" 
                :src="uploadImageUrl")
          v-file-input(
            v-model="input_image"
            accept="image/*"
            show-size
            label="画像ファイルをアップロードしてください"
            color="light-green"
            prepend-icon="$image"
            @change="onImagePicked")
          v-text-field.my-2(
            label="ニックネーム"
            v-model="name"
            :rules="[rules.required]"
            color="light-green"
            prepend-icon="$accountOutline")
          v-text-field.my-2(
            label="bio"
            v-model="bio"
            color="light-green"
            prepend-icon="$bio")
          v-text-field.my-2(
            label="ウェブサイト"
            v-model="web"
            color="light-green"
            prepend-icon="$linkVariant")
          v-btn.my-6(
            block
            rounded
            dark
            color="light-green"
            elevation="3"
            large
            to="/1") プロフィール設定       
</template>
<script>
export default {
  data() {
    return {
      show: false,
      name: '',
      bio: '',
      web: '',
      input_image: null,
      uploadImageUrl: '',
      rules: {
        required: value => !!value || '必須項目です'
      }
    }
  },
  methods: {
    onImagePicked(file) {
      if (file !== undefined && file !== null) {
        if (file.name.lastIndexOf('.') <= 0) {
          return
        }
        const fr = new FileReader()
        fr.readAsDataURL(file)
        fr.addEventListener('load', () => {
          this.uploadImageUrl = fr.result
        })
      } else {
        this.uploadImageUrl = ''
      }
    }
  }
}
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
