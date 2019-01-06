export enum Types {
  START_PROCESS = 'progressBar/start_process',
  END_PROCESS = 'progressBar/end_process'
}

export class StartProcess implements FluxStandardAction {
  public type = Types.START_PROCESS
  constructor() {}
}

export class EndProcess implements FluxStandardAction {
  public type = Types.END_PROCESS
  constructor() {}
}
