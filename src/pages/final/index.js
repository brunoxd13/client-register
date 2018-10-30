import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Button from "../../components/button";

import "./styles.css";

class Final extends Component {
  render() {
    const onClickBtn = () => {
      this.props.history.push("/");
    };

    return (
      <div className="container-cadastro-sucesso">
        <div className="content-cadastro-sucesso">
          <i className="icon icon-check icon-sucesso" aria-hidden="true" />
          <p className="text-sucesso">Cadastrado com sucesso!</p>
          <Button
            className="btn-sucesso"
            text="Obrigado"
            onClick={onClickBtn}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Final);
