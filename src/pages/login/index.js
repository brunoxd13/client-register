import React, { Component } from "react";
import "./styles.css";

import Input from "../../components/input";
import ReactSVG from 'react-svg'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  handleFieldChange(fieldId, value) {
    console.log(`${fieldId} e ${value}`);
    this.setState({ [fieldId]: value });
  }

  render() {
    return (
      <div className="window-login">
        <div className="header-login">
          <p className="header-name">Clientes</p>
        </div>

        <div className="body-login">
          <Input type="text" placeholder="Usúario" icon="../../assets/group.svg" id="usuario" onChange={this.handleFieldChange}/>
          <Input type="password" placeholder="Senha" icon="../../assets/group.svg" />
          

        </div>
      </div>
    );
  }
}

export default Login;
