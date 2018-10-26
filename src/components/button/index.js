import React, { Component } from "react";
import "./styles.css";

class Button extends Component {
  render() {
    const { text, onClick } = this.props;
    return (
      <div className="wrapper">
        <button className="btn btn-primary" onClick={onClick}>
          <span className="btn-txt">{text}</span>
        </button>
      </div>
    );
  }
}

export default Button;
