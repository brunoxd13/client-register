import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickContato } from "../../actions";

import Header from "../../components/header";
import InputIcon from "../../components/inputIcon";
import ButtonIcon from "../../components/buttonIcon";

import "./styles.css";

class Contato extends Component {
  constructor(props) {
    super(props);

    this.state = {
      celular: "",
      email: "",
      dtNascimento: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  render() {
    const { clickContato } = this.props;

    const onClickBtn = () => {
      //TODO: data validation here
      clickContato(
        this.state.celular,
        this.state.email,
        this.state.dtNascimento
      );

      this.props.history.push("/endereco");
    };

    return (
      <div className="container-informar-contatos">
        <Header title="Contato" backTo="/identificacao" />
        <div className="container-cmp-contato">
          <div className="container-input-celular">
            <InputIcon
              className="input-celular"
              type="tel"
              placeholder="Celular"
              icon="icon-search_left"
              id="celular"
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="container-input-email">
            <InputIcon
              className="input-email"
              type="email"
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

          <ButtonIcon text="Próximo" onClick={onClickBtn} />
        </div>
      </div>
    );
  }
}
const mapStateToProps = store => ({
  celular: store.clickCliente.celular,
  email: store.clickCliente.email,
  dtNascimento: store.clickCliente.dtNascimento
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickContato }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Contato)
);
