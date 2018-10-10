import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import Header from "../../components/header";
import Input from "../../components/input";
import ButtonIcon from "../../components/buttonIcon";

import "./styles.css";

class Identificacao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  onClickBtn = () => {
    //TODO: data validation here
    this.props.history.push("/contato");
  };

  render() {
    return (
      <div className="container-identificacao">
        <Header title="Identificação" backTo="/" />
        <div className="container-cmp-identificacao">
          <div className="container-input-nome">
            <Input
              type="text"
              placeholder="Digite seu nome completo"
              id="nome"
              onChange={this.handleFieldChange}
            />
          </div>

          <ButtonIcon text="Próximo" onClick={this.onClickBtn} />
        </div>
      </div>
    );
  }
}

export default withRouter(Identificacao);
