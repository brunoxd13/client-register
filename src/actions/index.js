import {
  CLICK_UPDATE_VALUE,
  CLICK_CPF_CNPJ,
  CLICK_IDENTIFICACAO,
  CLICK_CONTATO,
  CLICK_ENDERECO
} from "./actionTypes";

export const clickButton = value => ({
  type: CLICK_UPDATE_VALUE,
  newValue: value
});

export const clickCpfCnpj = cpfCnpj => ({
  type: CLICK_CPF_CNPJ,
  newCpfCnpj: cpfCnpj
});

export const clickIdentificacao = nome => ({
  type: CLICK_IDENTIFICACAO,
  newNome: nome
});

export const clickContato = (celular, email, dtNascimento) => ({
  type: CLICK_CONTATO,
  newCelular: celular,
  newEmail: email,
  newDtNascimento: dtNascimento
});

export const clickEndereco = (cep, cidade, rua, bairro) => ({
  type: CLICK_ENDERECO,
  newCep: cep,
  newCidade: cidade,
  newRua: rua,
  newBairro: bairro
});
