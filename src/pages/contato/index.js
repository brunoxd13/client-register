import React, { Component } from "react";
import Header from "../../components/header";
import InputIcon from "../../components/inputIcon";
import ButtonIcon from "../../components/buttonIcon";
import { withRouter } from "react-router-dom";

import "./styles.css";

class Contato extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dtNascimento: "",
      celular: "",
      email: ""
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
      <div className="container-informar-contatos">
        <Header title="Contato" backTo="/identificacao" />
        <div className="container-cmp-contato">
          <div className="container-input-celular">
            <InputIcon
              className="input-celular"
              type="text"
              placeholder="Celular"
              icon="icon-search_left"
              id="celular"
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="container-input-email">
            <InputIcon
              className="input-email"
              type="text"
              placeholder="E-mail"
              icon="icon-message"
              id="email"
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="container-input-dt-nascimento">
            <InputIcon
              className="input-dt-nascimento"
              type="text"
              placeholder="Data de Nascimento"
              icon="icon-calendar"
              id="dtNascimento"
              onChange={this.handleFieldChange}
            />
          </div>

          <ButtonIcon text="Próximo" onClick={this.onClickBtn} />
        </div>
      </div>
    );
  }
}

export default withRouter(Contato);
