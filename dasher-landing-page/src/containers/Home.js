import React, { Component, Fragment } from "react";
import NavBar from "../components/NavBar";
import "./Home.css";

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <header>
          <div className="heading">
            <h1>Introducing faster technical screening.</h1>
            <h3>
              Dasher assesses your candidate’s skills by analyzing their Github
              profile.
            </h3>
            <div className="cta" />
          </div>
          <img className="mockup" src="../assets/mockup.png" />
        </header>
      </Fragment>
    );
  }
}

export default Home;
