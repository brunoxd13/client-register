import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCliente } from "../../actions";

import InputIcon from "../../components/inputIcon";
import ButtonIcon from "../../components/buttonIcon";

import "./styles.css";

import logo from "../../assets/images/logo.png";

import * as ClienteAPI from "../../service/api";

class InformarCpf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cpfCnpj: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    //TODO: on component did mount get logo image;
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  render() {
    const {
      idCliente,
      dsCnpjCpf,
      dsNome,
      nrTelefone,
      dsEmail,
      dtNascimento,
      cep,
      dsCidade,
      idCidade,
      dsEndereco,
      dsBairro,
      imFoto,
      updateCliente
    } = this.props;

    const onClickBtn = () => {
      //TODO: data validation here

      ClienteAPI.getClienteByCpfCnpj(this.state.cpfCnpj).then(cliente => {
        updateCliente(cliente);
        //Atualizar a store com os dados do cliente.
      });

      // this.props.history.push("/identificacao");
    };

    return (
      <div className="container-informar-cpf">
        <div className="container-img">
          <img className="logo-img" src={logo} alt="Logo" />
        </div>
        <div className="containerCmpInformarCpf">
          <div className="container-input-cpf-cnpj">
            <InputIcon
              className="input-cpf-cnpj"
              type="number"
              placeholder="Informe seu CPF ou CNPJ"
              icon="icon-search_left"
              id="cpfCnpj"
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            <ButtonIcon text="Próximo" onClick={onClickBtn} />
          </div>
          <h1>{dsNome}</h1>
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  idCliente: store.clickCliente.idCliente,
  dsCnpjCpf: store.clickCliente.dsCnpjCpf,
  dsNome: store.clickCliente.dsNome,
  nrTelefone: store.clickCliente.nrTelefone,
  dsEmail: store.clickCliente.dsEmail,
  dtNascimento: store.clickCliente.dtNascimento,
  cep: store.clickCliente.cep,
  dsCidade: store.clickCliente.dsCidade,
  idCidade: store.clickCliente.idCidade,
  dsEndereco: store.clickCliente.dsEndereco,
  dsBairro: store.clickCliente.dsBairro,
  imFoto: store.clickCliente.imFoto
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateCliente }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(InformarCpf)
);
