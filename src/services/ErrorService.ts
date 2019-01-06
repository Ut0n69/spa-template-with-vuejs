import store from '@/store'
import { SetMessage, UpdateErrorStatus } from '@/store/Modules/error/types'
import { EndProcess } from '@/store/Modules/progressBar/types'

export default class ErrorService {
  errorMessage: string
  constructor(context: string) {
    this.errorMessage = context
  }
  private endProcess(): void {
    store.commit(new EndProcess())
  }

  public showErrorMessage(): void {
    this.endProcess()
    store.commit(new UpdateErrorStatus(true))
    store.commit(new SetMessage(this.errorMessage))
  }
}
