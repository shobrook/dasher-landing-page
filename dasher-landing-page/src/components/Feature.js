import React, { Component } from "react";
import "./Feature.css";

class Feature extends Component {
  render() {
    const { icon, title, description } = this.props;

    return (
      <div className="feature">
        <img src={icon} />
        <h2>{title}</h2>
        <h3>{description}</h3>
      </div>
    );
  }
}

export default Feature;
