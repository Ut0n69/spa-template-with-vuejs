export enum Types {
  UPDATE_ERROR_STATUS = 'error/update_error_status',
  SET_MESSAGE = 'error/set_message'
}

export class UpdateErrorStatus implements FluxStandardAction {
  public type = Types.UPDATE_ERROR_STATUS
  constructor(public payload: any) {}
}

export class SetMessage implements FluxStandardAction {
  public type = Types.SET_MESSAGE
  constructor(public payload: any) {}
}
