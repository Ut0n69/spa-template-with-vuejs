export interface IErrorState {
  hasError: boolean
  message: string
}

export const initialState = (): IErrorState => {
  return {
    hasError: false,
    message: ''
  }
}
