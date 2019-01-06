import store from '@/store'

export const getErrorMessage = (): string => {
  return store.state.error.message
}
