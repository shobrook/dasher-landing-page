import React, { Component } from "react";
import "./NavBar.scss";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <div className="nav-bar">
          <img className="logo" src="assets/logo.svg" />
          <div className="nav-links">
            <a>Why Dasher?</a>
            <a>How it Works</a>
            <a>Get in Touch</a>
            <div className="for-developers">For Developers</div>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavBar;
