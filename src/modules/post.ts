import { SetupContext, reactive, computed } from '@vue/composition-api'
import { User, Post, StateChanger } from '@/types'
import PostModel from '@/models/PostModel'
import UserPostModel from '@/models/UserPostModel'

export default ({ root }: SetupContext) => {
  const state = reactive({
    post: {} as Post,
    posts: [] as User[],
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
    state.posts = []
    state.identifier++
    cursor = 0
    isLast = false
  }

  function createQuery() {
    return {
      startDate: startDate.value,
      endDate: endDate.value,
      start: cursor,
      end: cursor + perPage - 1,
    }
  }

  async function create(postData: Post, token: string) {
    if (state.loading) return
    state.loading = true
    return new PostModel()
      .post(postData, { headers: { authorization: token } })
      .finally(() => {
        state.loading = false
      })
  }

  async function edit(postData: Post, token: string) {
    if (state.loading) return
    state.loading = true
    return new PostModel()
      .patch(postData.id, postData, { headers: { authorization: token } })
      .finally(() => {
        state.loading = false
      })
  }

  async function del(postData: Post, token: string) {
    if (state.loading) return
    state.loading = true
    return new PostModel()
      .delete(postData.id, { headers: { authorization: token } })
      .finally(() => {
        state.loading = false
      })
  }

  async function getList() {
    if (isLast || state.loading) return
    state.listLoading = true
    return new UserPostModel(userId.value)
      .getList(createQuery())
      .then((res: any) => {
        state.posts.push(...res.data.posts)
        if (!res.data.posts.length) isLast = true
      })
      .finally(() => {
        state.listLoading = false
      })
  }

  async function infiniteHandler($state: StateChanger) {
    await getList()
    if (isLast) {
      $state.complete(!state.posts.length)
    } else {
      $state.loaded()
    }
    cursor += perPage
  }

  return {
    ...state,
    reset,
    create,
    edit,
    del,
    getList,
    infiniteHandler,
  }
}
