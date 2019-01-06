export interface IProgressBarState {
  processing: boolean
}

export const initialState = (): IProgressBarState => {
  return {
    processing: false
  }
}
