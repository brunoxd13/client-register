import { UPDATE_CLIENTE } from "./actionTypes";

export const updateCliente = cliente => ({
  type: UPDATE_CLIENTE,
  newCliente: cliente
});
