import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import {
  mdiClock,
  mdiMagnify,
  mdiCrown,
  mdiAccount,
  mdiLinkVariant,
  mdiCalendar,
  mdiDelete,
  mdiEye,
  mdiEyeOff,
  mdiCog,
  mdiClockOutline,
  mdiCrownOutline,
  mdiAccountOutline,
  mdiLogin,
  mdiClipboardTextOutline,
  mdiFaceProfile,
  mdiEmailOutline,
  mdiLockOutline,
  mdiLogout,
  mdiExitRun,
  mdiArrowLeft,
  mdiImage
} from '@mdi/js'
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    values: {
      clock: mdiClock,
      clockOutline: mdiClockOutline,
      magnify: mdiMagnify,
      crown: mdiCrown,
      crownOutline: mdiCrownOutline,
      account: mdiAccount,
      accountOutline: mdiAccountOutline,
      linkVariant: mdiLinkVariant,
      calendar: mdiCalendar,
      delete: mdiDelete,
      eye: mdiEye,
      eyeoff: mdiEyeOff,
      cog: mdiCog,
      login: mdiLogin,
      bio: mdiClipboardTextOutline,
      faceProfile: mdiFaceProfile,
      emailOutline: mdiEmailOutline,
      lockOutline: mdiLockOutline,
      logout: mdiLogout,
      exit: mdiExitRun,
      allowLeft: mdiArrowLeft,
      image: mdiImage
    }
  }
})
