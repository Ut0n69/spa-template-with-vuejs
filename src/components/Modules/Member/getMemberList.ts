import store from '@/store'

export const getMemberList = (): any => {
  return store.state.member.list
}
