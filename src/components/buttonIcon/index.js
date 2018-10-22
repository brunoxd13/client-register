import React, { Component } from "react";
import "./styles.css";

class ButtonIcon extends Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <div className="wrapper">
        <button className="btn btn-primary" onClick={onClick}>
          <span className="btn-txt">{text}</span>

          <i className="icon icon-arrow-right" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default ButtonIcon;
