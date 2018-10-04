import React, { Component, Fragment } from "react";
import NavBar from "../components/NavBar";
import EmailField from "../components/EmailField";
import Feature from "../components/Feature";

import "./Home.css";

const firstFeature = {
  icon: "../assets/target.svg",
  title: "Data-Driven",
  description:
    "Dasher identifies a candidate’s preferred programming languages and tech stack, and compares their proficiency to the best developers on Github, so you can quickly spot the best fits for your role’s requirements."
};
const secondFeature = {
  icon: "../assets/search.svg",
  title: "Smarter Screening",
  description:
    "Automatic analysis of Github profiles saves screening time and helps you evaluate candidates more effectively. Look beyond your candidate’s resumé. Automatic analysis of Github profiles saves screening time."
};
const thirdFeature = {
  icon: "../assets/hierarchy.svg",
  title: "Easy Integration",
  description:
    "Seamlessly import applicants from Lever or Greenhouse, then sort and analyze them in our simple and user-friendly dashboard. Automatic analysis of Github profiles saves screening time."
};

class Home extends Component {
  render() {
    return (
      <Fragment>
        <NavBar />
        <header>
          <div className="heading">
            <h1>
              Hire the best builders, not resume padders.
              {/*Hire the best builders, not the best resume writers.*/}
              {/*Say goodbye to the technical interview.*/}
              {/*Introducing faster technical screening.*/}
            </h1>
            <h3>
              Dasher identifies the applicants in your pool with the strongest
              Github profiles.
              {/*Dasher assesses your candidate’s skills by analyzing their Github
              profile.*/}
            </h3>
            <EmailField />
          </div>
          <img className="mockup" src="../assets/mockup.png" />
        </header>
        <section className="why-dasher">
          <h1 className="title">Why Dasher?</h1>
          <div className="features">
            <Feature {...firstFeature} />
            <Feature {...secondFeature} />
            <Feature {...thirdFeature} />
          </div>
        </section>
        {/*<section className="how-it-works" />*/}
      </Fragment>
    );
  }
}

export default Home;
