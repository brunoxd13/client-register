import React, { Component } from "react";
import InputIcon from "../../components/inputIcon";
import ButtonIcon from "../../components/buttonIcon";
import { withRouter } from "react-router-dom";

import "./styles.css";

import logo from "../../assets/images/logo.png";

class InformarCpf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cpfCnpj: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  onClickBtn = () => {
    //TODO: data validation here
    this.props.history.push("/identificacao");
  };

  //TODO: on component did mount get logo image;

  render() {
    return (
      <div className="container-informar-cpf">
        <div className="container-img">
          <img className="logo-img" src={logo} alt="Logo" />
        </div>

        <div className="containerCmpInformarCpf">
          <div className="container-input-cpf-cnpj">
            <InputIcon
              className="input-cpf-cnpj"
              type="text"
              placeholder="Informe seu CPF ou CNPJ"
              icon="icon-search_left"
              id="cpfCnpj"
              onChange={this.handleFieldChange}
            />
          </div>
          <div>
            <ButtonIcon text="Próximo" onClick={this.onClickBtn} />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(InformarCpf);
