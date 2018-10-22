import {
  CLICK_CPF_CNPJ,
  CLICK_IDENTIFICACAO,
  CLICK_CONTATO,
  CLICK_ENDERECO,
  UPDATE_CLIENTE
} from "../actions/actionTypes";

const initialState = {
  idCliente: 0,
  dsCnpjCpf: "",
  dsNome: "",
  nrTelefone: "",
  dsEmail: "",
  dtNascimento: "",
  cep: "",
  dsCidade: "",
  idCidade: 0,
  dsEndereco: "",
  dsBairro: "",
  imFoto: ""
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
    case UPDATE_CLIENTE:
      return {
        ...state,
        ...action.newCliente
        // cpfCnpj: action.newCliente.newCpfCnpj,
        // nome: action.newCliente.newNome,
        // celular: action.newCliente.newCelular,
        // email: action.newCliente.newEmail,
        // dtNascimento: action.newCliente.newDtNascimento,
        // cep: action.newCliente.newCep,
        // cidade: action.newCliente.newCidade,
        // rua: action.newCliente.newRua,
        // bairro: action.newCliente.newBairro
      };
    default:
      return state;
  }
};
