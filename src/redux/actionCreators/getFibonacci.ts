import axios from "axios";
import { Dispatch } from "redux";
import { Action, ActionType } from "../actionTypes";

export const getFibonacci = (fibNum: number) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.GET_FIBONACCI_NUMBER_PENDING,
    });

    try {
      const { data } = await axios.get(
        `http://localhost:7777/api/fibonacci/${fibNum}`
      );

      dispatch({
        type: ActionType.GET_FIBONACCI_NUMBER_SUCCESS,
        payload: data.fibonacci >= 0 ? data.fibonacci : 0,
      });
    } catch (err: any) {
      console.log(err);
      dispatch({
        type: ActionType.GET_FIBONACCI_NUMBER_FAIL,
        payload: err.message,
      });
    }
  };
};
