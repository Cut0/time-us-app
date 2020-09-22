import { SetupContext, reactive } from '@vue/composition-api'
import { User } from '@/types'
import SignuoModel from '@/models/SignupModel'

export default ({ root }: SetupContext) => {
  const state = reactive({
    token: String,
    loading: false,
  })

  async function signUp(userData: User) {
    if (state.loading) return
    state.loading = true
    return new SignuoModel()
      .post(userData)
      .then((res: any) => {
        state.token = res.data
      })
      .finally(() => {
        state.loading = false
      })
  }

  return {
    ...state,
    signUp,
  }
}
