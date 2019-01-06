import { Ajax } from '@/network/Ajax.ts'
import { FetchMember } from '@/store/Modules/member/types'
import { AjaxRequest } from '@/network/AjaxRequest'
import store from '@/store'

export interface IFetchMember {}

export class MemberApiClient implements IFetchMember {
  static shared: MemberApiClient = new MemberApiClient()

  fetchMember() {
    const request: AjaxRequest = {
      path: '/',
      params: '',
      data: {}
    }
    Ajax.shared.get(request).then((data: any) => {
      store.commit(new FetchMember(data.results[0]))
    })
  }
}
