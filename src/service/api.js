const api = "";

const headers = {
  Accept: "application/json"
};

export const getClienteByCpfCnpj = cpfCnpj =>
  fetch(`${api}/cliente/cpfcnpj/${cpfCnpj}`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.warn(error);
    });

export const getCidadeByCep = cep =>
  fetch(`${api}/cidade/cep/${cep}`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.warn(error);
    });

export const getImagemLogo = () =>
  fetch(`${api}/imagem/logo`, { headers })
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.warn(error);
    });

export const createCliente = cliente =>
  fetch(`${api}/cliente/`, {
    method: "POST",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ cliente })
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.warn(error);
    });

export const updateCliente = cliente =>
  fetch(`${api}/cliente/${cliente.id}`, {
    method: "PUT",
    headers: {
      ...headers,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ cliente })
  })
    .then(res => res.json())
    .then(data => data)
    .catch(error => {
      console.warn(error);
    });
