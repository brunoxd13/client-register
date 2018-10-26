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
  imFoto: ""
};

export const clienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_CLIENTE:
      return {
        ...state,
        ...action.newCliente
      };

    case CREATE_UPDATE_CLIENTE_API:
      let cliente = { state };
      console.log(cliente);

      ClienteAPI.createCliente(cliente).then(res => {
        console.log(res);
        return res;
      });

    default:
      return state;
  }
};
