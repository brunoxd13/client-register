import React, { Component } from "react";
import "./styles.css";

import ReactSVG from "react-svg";

class Input extends Component {
  handleChange = event => {
    const text = event.target.value;
    this.props.onChange(this.props.id, text);
  };

  render() {
    const { type, placeholder, icon } = this.props;

    return (
      <div className="inputWithIcon">
        <input
          type={type}
          placeholder={placeholder}
          onChange={this.handleChange}
          value={this.props.value}
        />

        <i className="fa fa-user fa-lg fa-fw" aria-hidden="true" />
      </div>
    );
  }
}

export default Input;
