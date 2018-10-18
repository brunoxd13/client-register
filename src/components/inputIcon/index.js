import React, { Component } from "react";
import "./styles.css";

class InputIcon extends Component {
  handleChange = event => {
    const text = event.target.value;
    this.props.onChange(this.props.id, text);
  };

  render() {
    const { type, placeholder, icon, value } = this.props;

    return (
      <div className="inputWithIcon">
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={this.handleChange}
        />

        <i className={icon} aria-hidden="true" />
      </div>
    );
  }
}

export default InputIcon;
