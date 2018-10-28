import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCliente } from "../../actions";

import InputIcon from "../../components/inputIcon";
import ButtonIcon from "../../components/buttonIcon";

import "./styles.css";

import logo from "../../assets/images/logo.png";

import * as ClienteAPI from "../../service/api";

class InformarCpf extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dsCnpjCpf: "",
      imgLogo: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);

    ClienteAPI.getImagemLogo().then(image => {
      this.setState({ imgLogo: image });
    });
  }

  componentDidMount() {
    this.setState({ dsCnpjCpf: this.props.dsCnpjCpf });
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value }, () => {
      this.props.updateCliente(this.state);
    });
  }

  validateFields() {
    return /^(\d{2}\.?\d{3}\.?\d{3}\/?\d{4}-?\d{2}|\d{3}\.?\d{3}\.?\d{3}-?\d{2})$/.test(
      this.state.dsCnpjCpf
    );
  }

  render() {
    const { updateCliente } = this.props;

    const onClickBtn = () => {
      if (!this.validateFields()) {
        return;
      }

      ClienteAPI.getClienteByCpfCnpj(this.state.dsCnpjCpf).then(cliente => {
        var clear = false;
        if (!cliente) {
          clear = true;
          cliente = { dsCnpjCpf: this.state.dsCnpjCpf };
        }

        updateCliente(cliente, clear);
        this.props.history.push("/identificacao");
      });
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
              id="dsCnpjCpf"
              value={this.state.dsCnpjCpf}
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
  dsCnpjCpf: store.clickCliente.dsCnpjCpf
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateCliente }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(InformarCpf)
);
