import { MutationTree } from 'vuex'
import { IProgressBarState } from './state'
import { Types } from './types'

export const mutations: MutationTree<IProgressBarState> = {
  [Types.START_PROCESS]: state => {
    state.processing = true
  },
  [Types.END_PROCESS]: state => {
    const dom: HTMLInputElement = <HTMLInputElement>document.querySelector('.progress-bar')
    dom!.style.animationPlayState = 'paused'
    dom!.style.animation = 'none'
    dom!.style.width = '100%'
    setTimeout(() => {
      state.processing = false
    }, 300)
  }
}
