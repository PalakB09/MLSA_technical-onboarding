/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/analytics.jpg";

const imageAltText = "workspace background";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Credit Card Approval Prediction System",
    description:
      "A machine learning model that predicts whether a credit card application will be approved or not.",
    url: "https://colab.research.google.com/drive/1tVYY_giR5IAvZnHr_R6FxOCONDSvUkDb?usp=sharing",
  },
  {
    title: "Finger Paint Canvas",
    description:
      "A Python-based digital drawing platform that allows one to create art on the paint window using any object without the need for a stylus or a specific tool.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "Society Junction",
    description:
      "The web app created by our team aims to solve the problems faced by the students applying for the different societies in college and the society cores recruiting for the society..",
    url: "https://devfolio.co/projects/society-junction-b99f",
  },
  {
    title: "UI/UX Case Study",
    description:
      "A UI/UX case study on a portal for students to find and apply for research opportunities, connect with faculty members, and access resources and tools to support their research efforts.",
    url: "https://devfolio.co/projects/research-roundtable-48c1",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
