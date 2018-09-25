import React, { Component } from "react";
import "./styles.css";

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
        />

        <i className={icon} aria-hidden="true"/>
      </div>
    );
  }
}

export default Input;