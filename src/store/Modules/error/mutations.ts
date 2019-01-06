import { MutationTree } from 'vuex'
import { IErrorState } from './state'
import { Types, UpdateErrorStatus, SetMessage } from './types'

export const mutations: MutationTree<IErrorState> = {
  [Types.UPDATE_ERROR_STATUS]: (state, action: UpdateErrorStatus) => {
    state.hasError = action.payload
  },
  [Types.SET_MESSAGE]: (state, action: SetMessage) => {
    state.message = action.payload
  }
}
