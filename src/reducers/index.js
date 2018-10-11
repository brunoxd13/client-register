import { clickReducer } from "./clickReducer";
import { clienteReducer } from "./clienteReducer";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  clickCliente: clienteReducer,
  clickState: clickReducer
});
