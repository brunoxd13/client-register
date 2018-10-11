import {
  CLICK_CPF_CNPJ,
  CLICK_IDENTIFICACAO,
  CLICK_CONTATO,
  CLICK_ENDERECO
} from "../actions/actionTypes";

const initialState = {
  cpfCnpj: "",
  nome: "",
  celular: "",
  email: "",
  dtNascimento: "",
  cep: "",
  cidade: "",
  rua: "",
  bairro: ""
};

export const clienteReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLICK_CPF_CNPJ:
      console.log("");
      return {
        ...state,
        cpfCnpj: action.newCpfCnpj
      };

    case CLICK_IDENTIFICACAO:
      console.log("Cliente reducer identificacao");

      return {
        ...state,
        nome: action.newNome
      };

    case CLICK_CONTATO:
      console.log("contato");
      return {
        ...state,
        celular: action.newCelular,
        email: action.newEmail,
        dtNascimento: action.newDtNascimento
      };

    case CLICK_ENDERECO:
      console.log("endereco");
      return {
        ...state,
        cep: action.newCep,
        cidade: action.newCidade,
        rua: action.newRua,
        bairro: action.newBairro
      };
    default:
      console.log("default");
      return state;
  }
};
