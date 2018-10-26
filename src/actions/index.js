import { UPDATE_CLIENTE, CREATE_UPDATE_CLIENTE_API } from "./actionTypes";

export const updateCliente = (cliente, clear = false) => ({
  type: UPDATE_CLIENTE,
  newCliente: cliente,
  clear: clear
});

export const createClienteAPI = () => ({
  type: CREATE_UPDATE_CLIENTE_API
});
