import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickEndereco } from "../../actions";

import Header from "../../components/header";
import Input from "../../components/input";
import ButtonIcon from "../../components/buttonIcon";

import "./styles.css";

class Endereco extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cep: "",
      cidade: "",
      rua: "",
      bairro: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  render() {
    const { clickEndereco } = this.props;

    const onClickBtn = () => {
      //TODO: data validation here
      clickEndereco(
        this.state.cep,
        this.state.cidade,
        this.state.rua,
        this.state.bairro
      );

      // this.props.history.push("/");
    };

    return (
      <div className="container-informar-endereco">
        <Header title="Endereço" backTo="/contato" />
        <div className="container-input-cep">
          <Input
            type="text"
            placeholder="CEP"
            id="cep"
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="container-input-cidade">
          <Input
            type="text"
            placeholder="Cidade"
            id="cidade"
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="container-input-rua">
          <Input
            type="text"
            placeholder="Rua"
            id="rua"
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="container-input-bairro">
          <Input
            type="text"
            placeholder="Bairro"
            id="bairro"
            onChange={this.handleFieldChange}
          />
        </div>
        <ButtonIcon text="Próximo" onClick={onClickBtn} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  cep: store.clickCliente.cep,
  cidade: store.clickCliente.cidade,
  rua: store.clickCliente.rua,
  bairro: store.clickCliente.bairro
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickEndereco }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Endereco)
);
