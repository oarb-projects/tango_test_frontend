export enum ActionType {
  GET_FIBONACCI_NUMBER_PENDING = "GET_FIBONACCI_NUMBER_PENDING",
  GET_FIBONACCI_NUMBER_SUCCESS = "GET_FIBONACCI_NUMBER_SUCCESS",
  GET_FIBONACCI_NUMBER_FAIL = "GET_FIBONACCI_NUMBER_FAIL",
}

interface actionPending {
  type: ActionType.GET_FIBONACCI_NUMBER_PENDING;
}

interface actionSuccess {
  type: ActionType.GET_FIBONACCI_NUMBER_SUCCESS;
  payload: number;
}

interface actionFail {
  type: ActionType.GET_FIBONACCI_NUMBER_FAIL;
  payload: string;
}

export type Action = actionPending | actionSuccess | actionFail;
