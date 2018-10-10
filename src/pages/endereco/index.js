import React, { Component } from "react";
import Header from "../../components/header";
import Input from "../../components/input";
import ButtonIcon from "../../components/buttonIcon";
import { withRouter } from "react-router-dom";

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

  onClickBtn = () => {
    //TODO: data validation here
    this.props.history.push("/");
  };

  render() {
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
        <ButtonIcon text="Próximo" onClick={this.onClickBtn} />
      </div>
    );
  }
}

export default withRouter(Endereco);
