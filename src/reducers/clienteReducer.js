import * as ClienteAPI from "../service/api";

import {
  UPDATE_CLIENTE,
  CREATE_UPDATE_CLIENTE_API
} from "../actions/actionTypes";

const initialState = {
  idCliente: 0,
  dsCnpjCpf: "",
  dsNome: "",
  nrTelefone: "",
  dsEmail: "",
  dtNascimento: "",
  dsCep: "",
  dsCidade: "",
  idCidade: 0,
  dsEndereco: "",
  dsBairro: "",
  nrEndereco: "",
  dsComplemento: "",
  fgReceberPromocoes: "true",
  imFoto: ""
};

export const clienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CLIENTE:
      if (action.clear) {
        state = initialState;
      }

      return {
        ...state,
        ...action.newCliente
      };

    case CREATE_UPDATE_CLIENTE_API:
      console.log(state.idCliente);
      if (state.idCliente > 0) {
        ClienteAPI.updateCliente(state).then(res => {
          return res;
        });
      } else {
        ClienteAPI.createCliente(state).then(res => {
          return res;
        });
      }

    default:
      return state;
  }
};
