import store from '@/store'
import { IMember } from '@/store/Modules/member/state'

export const getMemberDetail = (id: number): IMember => {
  return store.state.member.list[id]
}
