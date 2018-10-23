import { UPDATE_CLIENTE } from "../actions/actionTypes";

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
      console.log(action);
      return {
        ...state,
        ...action.newCliente
      };

    default:
      return state;
  }
};
