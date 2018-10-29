import React, { Component } from "react";
import "./styles.css";

class Input extends Component {
  handleChange = event => {
    const text = event.target.value;
    this.props.onChange(this.props.id, text);
  };

  render() {
    const { type, placeholder, value, disabled } = this.props;

    return (
      <div className="container-input">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
          disabled={disabled}
        />
      </div>
    );
  }
}

export default Input;
