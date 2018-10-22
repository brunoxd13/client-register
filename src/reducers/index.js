import { clienteReducer } from "./clienteReducer";
import { combineReducers } from "redux";

export const Reducers = combineReducers({
  clickCliente: clienteReducer
});
