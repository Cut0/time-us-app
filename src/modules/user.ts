import { SetupContext, reactive, computed } from '@vue/composition-api'
import { User, StateChanger } from '@/types'
import UserModel from '@/models/UserModel'

export default ({ root }: SetupContext) => {
  const state = reactive({
    user: {} as User,
    users: [] as User[],
    listLoading: false,
    loading: false,
    identifier: 1,
  })

  const userId = computed(() => root.$route.params.userId)
  const startDate = computed(() => root.$route.query.startDate)
  const endDate = computed(() => root.$route.query.endDate)
  const perPage = 20
  let cursor = 0
  let isLast = false

  async function reset() {
    state.users = []
    state.identifier++
    cursor = 0
    isLast = false
  }

  function createQuery(type?: string) {
    return {
      startDate: startDate.value,
      endDate: endDate.value,
      start: cursor,
      end: cursor + perPage - 1,
      type,
    }
  }

  async function get() {
    if (state.loading) return
    state.loading = true
    return new UserModel()
      .get(userId.value)
      .then((res: any) => {
        state.user = res.data
      })
      .finally(() => {
        state.loading = false
      })
  }

  async function create(userData: User, token: string) {
    if (state.loading) return
    state.loading = true
    return new UserModel()
      .post(userData, { headers: { authorization: token } })
      .finally(() => {
        state.loading = false
      })
  }

  async function edit(userData: User, token: string) {
    if (state.loading) return
    state.loading = true
    return new UserModel()
      .patch(userId.value, userData, { headers: { authorization: token } })
      .finally(() => {
        state.loading = false
      })
  }

  async function del(userData: User, token: string) {
    if (state.loading) return
    state.loading = true
    return new UserModel()
      .delete(userData.id, { headers: { authorization: token } })
      .finally(() => {
        state.loading = false
      })
  }

  async function getList(searchType?: string) {
    if (isLast || state.loading) return
    state.listLoading = true
    return new UserModel()
      .getList(createQuery(searchType))
      .then((res: any) => {
        state.users.push(...res.data.users)
        if (!res.data.users.length) isLast = true
      })
      .finally(() => {
        state.listLoading = false
      })
  }

  async function infiniteHandler($state: StateChanger, searchType: string) {
    await getList(searchType)
    if (isLast) {
      $state.complete(!state.users.length)
    } else {
      $state.loaded()
    }
    cursor += perPage
  }

  return {
    ...state,
    reset,
    get,
    create,
    edit,
    del,
    getList,
    infiniteHandler,
  }
}
