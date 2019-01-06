import Vue from 'vue'
import Vuex from 'vuex'

import * as member from '@/store/Modules/member'
import * as error from '@/store/Modules/error'
import * as progressBar from '@/store/Modules/progressBar'

Vue.use(Vuex)

export interface RootState {
  member: member.IMemberState
  error: error.IErrorState
  progressBar: progressBar.IProgressBarState
}

export default new Vuex.Store<RootState>({
  modules: {
    member: member.store,
    error: error.store,
    progressBar: progressBar.store
  }
})
