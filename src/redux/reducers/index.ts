import { Action, ActionType } from "../actionTypes/index";

interface State {
  apiFibNumber: number | null;
  loading: boolean;
  error: string | null;
}

const initialState = {
  apiFibNumber: null,
  loading: false,
  error: null,
};

const fibonacciReducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case ActionType.GET_FIBONACCI_NUMBER_PENDING:
      return {
        loading: true,
        apiFibNumber: null,
        error: null,
      };

    case ActionType.GET_FIBONACCI_NUMBER_SUCCESS:
      return {
        loading: false,
        apiFibNumber: action.payload,
        error: null,
      };

    case ActionType.GET_FIBONACCI_NUMBER_FAIL:
      return {
        loading: false,
        error: action.payload,
        apiFibNumber: null,
      };
    default:
      return state;
  }
};

export default fibonacciReducer;
