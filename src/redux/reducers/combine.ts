import { combineReducers } from "redux";
import fibonacciReducer from "./index";

const reducers = combineReducers({
  fibonacciNumbers: fibonacciReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
