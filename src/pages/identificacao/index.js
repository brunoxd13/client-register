import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { clickIdentificacao } from "../../actions";

import Header from "../../components/header";
import Input from "../../components/input";
import ButtonIcon from "../../components/buttonIcon";

import "./styles.css";

class Identificacao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      nome: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  render() {
    const { clickIdentificacao } = this.props;

    const onClickBtn = () => {
      //TODO: data validation here
      clickIdentificacao(this.state.nome);
      this.props.history.push("/contato");
    };

    return (
      <div className="container-identificacao">
        <Header title="Identificação" backTo="/" />
        <div className="container-cmp-identificacao">
          <div className="container-input-nome">
            <Input
              type="text"
              placeholder="Digite seu nome completo"
              id="nome"
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
  nome: store.clickCliente.nome
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ clickIdentificacao }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Identificacao)
);
