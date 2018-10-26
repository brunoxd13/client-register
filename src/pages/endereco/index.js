import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCliente, createClienteAPI } from "../../actions";
import * as ClienteAPI from "../../service/api";

import Header from "../../components/header";
import Input from "../../components/input";
import Button from "../../components/button";

import "./styles.css";

class Endereco extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idCidade: 0,
      dsCep: "",
      dsCidade: "",
      dsEndereco: "",
      dsBairro: "",
      nrEndereco: "",
      dsComplemento: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
    this.handleCepChange = this.handleCepChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      idCidade: this.props.idCidade,
      dsCep: this.props.dsCep,
      dsCidade: this.props.dsCidade,
      dsEndereco: this.props.dsEndereco,
      dsBairro: this.props.dsBairro,
      nrEndereco: this.props.nrEndereco,
      dsComplemento: this.props.dsComplemento
    });
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
    this.props.updateCliente(this.state);
  }

  handleCepChange(fieldId, value) {
    this.setState({ [fieldId]: value });

    if (value.length >= 7) {
      ClienteAPI.getCidadeByCep(value).then(cidade => {
        if (typeof cidade[0] !== "undefined" && cidade[0] !== null) {
          this.setState({
            dsCidade: cidade[0].dsCidade,
            idCidade: cidade[0].idCidade
          });
        }
      });
    } else {
      this.setState({
        dsCidade: "",
        idCidade: 0
      });
    }

    this.props.updateCliente(this.state);
  }

  render() {
    const { updateCliente, createClienteAPI } = this.props;

    const onClickBtn = () => {
      //TODO: data validation here
      updateCliente(this.state);

      createClienteAPI();
      // this.props.history.push("/");
    };

    return (
      <div className="container-informar-endereco">
        <Header title="Endereço" backTo="/contato" />
        <div className="container-input-cep">
          <Input
            type="text"
            placeholder="CEP"
            id="dsCep"
            value={this.state.dsCep}
            onChange={this.handleCepChange}
          />
        </div>
        <div className="container-input-cidade">
          <Input
            type="text"
            placeholder="Cidade"
            id="dsCidade"
            value={this.state.dsCidade}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="container-input-rua">
          <Input
            type="text"
            placeholder="Rua"
            id="dsEndereco"
            value={this.state.dsEndereco}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="container-input-bairro">
          <Input
            type="text"
            placeholder="Bairro"
            id="dsBairro"
            value={this.state.dsBairro}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="container-input-numero">
          <Input
            type="text"
            placeholder="Número"
            id="nrEndereco"
            value={this.state.nrEndereco}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="container-input-complemento">
          <Input
            type="text"
            placeholder="Complemento"
            id="dsComplemento"
            value={this.state.dsComplemento}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="container-input-promocoes">
          <p>
            <input
              type="checkbox"
              id="fgReceberPromocoes"
              onChange={this.handleFieldChange}
            />
            Teste
          </p>
        </div>
        <Button text="Salvar" onClick={onClickBtn} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  dsCep: store.clickCliente.dsCep,
  dsCidade: store.clickCliente.dsCidade,
  dsEndereco: store.clickCliente.dsEndereco,
  dsBairro: store.clickCliente.dsBairro,
  nrEndereco: store.clickCliente.nrEndereco,
  dsComplemento: store.clickCliente.dsComplemento
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateCliente, createClienteAPI }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Endereco)
);
