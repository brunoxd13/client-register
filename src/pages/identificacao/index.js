import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCliente } from "../../actions";

import Header from "../../components/header";
import Input from "../../components/input";
import ButtonIcon from "../../components/buttonIcon";

import "./styles.css";

class Identificacao extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dsNome: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    this.setState({ dsNome: this.props.dsNome });
  }

  handleFieldChange(fieldId, value) {
    this.setState({ [fieldId]: value });
  }

  render() {
    const { updateCliente } = this.props;

    const onClickBtn = () => {
      //TODO: data validation here

      updateCliente(this.state);
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
              id="dsNome"
              value={this.state.dsNome}
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
  dsNome: store.clickCliente.dsNome
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateCliente }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Identificacao)
);
