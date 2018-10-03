import React, { Component } from "react";
import "./EmailField.css";

class EmailField extends Component {
  render() {
    return (
      <div className="email-field">
        <input type="text" placeholder="Email Address" />
        <div className="early-access">Get Early Access</div>
      </div>
    );
  }
}

export default EmailField;
