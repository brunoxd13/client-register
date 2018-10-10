import React, { Component } from "react";
import "./styles.css";

class ButtonIcon extends Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <div class="wrapper">
        <button className="btn btn-primary" onClick={onClick}>
          <span className="btn-txt">{text}</span>

          <i class="icon icon-arrow-right" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default ButtonIcon;
