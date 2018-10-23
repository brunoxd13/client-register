import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCliente } from "../../actions";

import Header from "../../components/header";
import InputIcon from "../../components/inputIcon";
import ButtonIcon from "../../components/buttonIcon";

import "./styles.css";

class Contato extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nrTelefone: "",
      dsEmail: "",
      dtNascimento: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      nrTelefone: this.props.nrTelefone,
      dsEmail: this.props.dsEmail,
      dtNascimento: this.props.dtNascimento
    });
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
    updateCliente(this.state);
  }

  render() {
    const { updateCliente } = this.props;

    const onClickBtn = () => {
      //TODO: data validation here
      updateCliente(this.state);

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
              id="nrTelefone"
              value={this.state.nrTelefone}
              onChange={this.handleFieldChange}
            />
          </div>
          <div className="container-input-email">
            <InputIcon
              className="input-email"
              type="email"
              placeholder="E-mail"
              icon="icon-message"
              id="dsEmail"
              value={this.state.dsEmail}
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
              value={this.state.dtNascimento}
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
  nrTelefone: store.clickCliente.nrTelefone,
  dsEmail: store.clickCliente.dsEmail,
  dtNascimento: store.clickCliente.dtNascimento
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateCliente }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Contato)
);
