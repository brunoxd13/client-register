import React, { Component } from "react";
import "./styles.css";

class Input extends Component {
  handleChange = event => {
    const text = event.target.value;
    this.props.onChange(this.props.id, text);
  };

  render() {
    const { type, placeholder } = this.props;

    return (
      <div className="container-input">
        <input
          type={type}
          placeholder={placeholder}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

export default Input;
