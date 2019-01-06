import { Module } from 'vuex'
import { RootState } from '@/store'
import { initialState, IProgressBarState } from './state'
import { mutations } from './mutations'

export * from './state'

export const store: Module<IProgressBarState, RootState> = {
  state: initialState,
  mutations
}
