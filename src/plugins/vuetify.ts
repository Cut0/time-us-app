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
  mdiEyeOff
} from '@mdi/js'
Vue.use(Vuetify)

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
    values: {
      clock: mdiClock,
      magnify: mdiMagnify,
      crown: mdiCrown,
      account: mdiAccount,
      linkVariant: mdiLinkVariant,
      calendar: mdiCalendar,
      delete: mdiDelete,
      eye: mdiEye,
      eyeoff: mdiEyeOff
    }
  }
})
