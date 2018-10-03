import React, { Component } from "react";
import "./styles.css";

class ButtonIcon extends Component {
  render() {
    const { text } = this.props;
    return (
      <div class="wrapper">
        <button className="btn btn-primary">
          <span className="btn-txt">{text}</span>
          
          <i class="icon icon-arrow-right" aria-hidden="true" />
        </button>
      </div>
    );
  }
}

export default ButtonIcon;
