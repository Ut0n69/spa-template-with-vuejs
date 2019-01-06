import { Module } from 'vuex'
import { RootState } from '@/store'
import { initialState, IErrorState } from './state'
import { mutations } from './mutations'

export * from './state'

export const store: Module<IErrorState, RootState> = {
  state: initialState,
  mutations
}
