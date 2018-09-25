import React, { Component } from "react";
import "./styles.css";

import Input from "../../components/input";

class Login extends Component {
  constructor(props){
    super(props);

    this.state = {
      usuario: "",
      senha: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }
  

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  render() {
    return (
      <div className="window-login">
        <div className="header-login">
          <i className="icon-user-book icon-header" aria-hidden="true"/>
        </div>
        <p className="header-name">Clientes</p>

        <div className="body-login">
          <Input type="text" placeholder="Usúario" icon="icon-group" id="usuario" onChange={this.handleFieldChange}/>
          <Input type="password" placeholder="Senha" icon="icon-lock" id="senha" onChange={this.handleFieldChange}/>
        </div>
      </div>
    );
  }
  
}

export default Login;
