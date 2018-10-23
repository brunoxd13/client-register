import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { updateCliente } from "../../actions";

import Header from "../../components/header";
import Input from "../../components/input";
import ButtonIcon from "../../components/buttonIcon";

import "./styles.css";

class Endereco extends Component {
  constructor(props) {
    super(props);

    this.state = {
      idCidade: 0,
      dsCep: "",
      dsCidade: "",
      dsEndereco: "",
      dsBairro: ""
    };

    this.handleFieldChange = this.handleFieldChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      idCidade: this.props.idCidade,
      dsCep: this.props.dsCep,
      dsCidade: this.props.dsCidade,
      dsEndereco: this.props.dsEndereco,
      dsBairro: this.props.dsBairro
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

      // this.props.history.push("/");
    };

    return (
      <div className="container-informar-endereco">
        <Header title="Endereço" backTo="/contato" />
        <div className="container-input-cep">
          <Input
            type="text"
            placeholder="CEP"
            id="dsCep"
            value={this.state.dsCep}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="container-input-cidade">
          <Input
            type="text"
            placeholder="Cidade"
            id="dsCidade"
            value={this.state.dsCidade}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="container-input-rua">
          <Input
            type="text"
            placeholder="Rua"
            id="dsEndereco"
            value={this.state.dsEndereco}
            onChange={this.handleFieldChange}
          />
        </div>
        <div className="container-input-bairro">
          <Input
            type="text"
            placeholder="Bairro"
            id="dsBairro"
            value={this.state.dsBairro}
            onChange={this.handleFieldChange}
          />
        </div>
        <ButtonIcon text="Próximo" onClick={onClickBtn} />
      </div>
    );
  }
}

const mapStateToProps = store => ({
  dsCep: store.clickCliente.dsCep,
  dsCidade: store.clickCliente.dsCidade,
  dsEndereco: store.clickCliente.dsEndereco,
  dsBairro: store.clickCliente.dsBairro
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ updateCliente }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(
  withRouter(Endereco)
);
