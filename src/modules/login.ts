import { SetupContext, reactive } from '@vue/composition-api'
import { User } from '@/types'
import LoginModel from '@/models/LoginModel'

export default ({ root }: SetupContext) => {
  const state = reactive({
    token: String,
    loading: false,
  })

  async function logIn(userData: User) {
    if (state.loading) return
    state.loading = true
    return new LoginModel()
      .post(userData)
      .then((res: any) => {
        state.token = res.data
        //ここでローカルストレージに保存する
      })
      .finally(() => {
        state.loading = false
      })
  }

  return {
    ...state,
    logIn,
  }
}
