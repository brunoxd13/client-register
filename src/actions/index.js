import { UPDATE_CLIENTE, CREATE_UPDATE_CLIENTE_API } from "./actionTypes";

export const updateCliente = cliente => ({
  type: UPDATE_CLIENTE,
  newCliente: cliente
});

export const createClienteAPI = () => ({
  type: CREATE_UPDATE_CLIENTE_API
});
