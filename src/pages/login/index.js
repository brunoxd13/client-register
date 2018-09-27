import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { clickButton } from '../../actions';
import "./styles.css";

import Input from "../../components/input";
import Header from "../../components/header";
import ButtonIcon from "../../components/buttonIcon"

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
    const {
      clickButton,
      newValue
    } = this.props;

    return (
      <div className="window-login">
        <Header title="Teste" backTo="/"/>

        <h1>{newValue}</h1>
        <ButtonIcon text="Botão"/>
        <div className="header-login">
          <i className="icon-user-book icon-header" aria-hidden="true"/>
          <p className="header-name">Clientes</p>
        </div>
        

        <div className="body-login">
          <Input type="text" placeholder="Usúario" id="usuario" onChange={this.handleFieldChange}/>
          <Input type="password" placeholder="Senha" id="senha" onChange={this.handleFieldChange}/>
        </div>
        <button onClick={() => clickButton(this.state.usuario)}>
          Click me!
        </button>
      </div>
    );
  }
  
}

const mapStateToProps = store => ({
  newValue: store.clickState.newValue
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickButton }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);
