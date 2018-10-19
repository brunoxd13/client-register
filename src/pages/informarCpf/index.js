import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickCpfCnpj } from "../../actions";

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
    ClienteAPI.getClienteByCpfCnpj(30303030).then(cliente => {
      console.log(cliente);
      //Atualizar a store com os dados do cliente.
    });
    //TODO: on component did mount get logo image;
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  render() {
    const { clickCpfCnpj } = this.props;

    const onClickBtn = () => {
      //TODO: data validation here
      clickCpfCnpj(this.state.cpfCnpj);

      ClienteAPI.getClienteByCpfCnpj(this.state.cpfCnpj).then(cliente => {
        //Atualizar a store com os dados do cliente.
      });

      this.props.history.push("/identificacao");
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
        </div>
      </div>
    );
  }
}

const mapStateToProps = store => ({
  cpfCnpj: store.clickCliente.cpfCnpj
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickCpfCnpj }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(InformarCpf)
);
