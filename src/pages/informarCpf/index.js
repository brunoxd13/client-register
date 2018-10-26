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
      console.log(image);
      this.setState({ imgLogo: image });
    });
  }

  componentDidMount() {
    this.setState({ dsCnpjCpf: this.props.dsCnpjCpf });
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
    this.props.updateCliente(this.state);
  }

  render() {
    const { updateCliente } = this.props;

    const onClickBtn = () => {
      //TODO: data validation here

      ClienteAPI.getClienteByCpfCnpj(this.state.dsCnpjCpf).then(cliente => {
        if (cliente) {
          updateCliente(cliente);
        } else {
          updateCliente(this.state);
        }
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
