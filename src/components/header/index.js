import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./styles.css";

class Header extends Component {
  render() {
    const { backTo, title } = this.props;

    return (
      <div className="header">
        <Link to={ backTo } className="link-icon">
          <i className="icon-header icon-arrow-left"  aria-hidden="true"/>
        </Link>

        <p className="text-header"> {title} </p>
      </div>
    );
  }
}

export default Header;