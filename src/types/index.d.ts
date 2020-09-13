export type User = {
  id: number
  name: string
  passworfd: string
  email: string
  bio: string
  my_url: string
}

export type Post = {
  id: number
}

export type StateChanger = {
  loaded: () => void
  complete: (noResults?: boolean) => void
  reset: () => void
  error: () => void
}
