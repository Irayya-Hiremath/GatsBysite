import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import 'bootstrap/dist/css/bootstrap.min.css'


import Layout from "../components/layout";

const AboutPage = () => {
  return (
    <Layout pageTitle="About Me..">
      <div className="container">
        <div className="row">
          <div className="col-4 ">
            <StaticImage alt="images" src="../images/mt2.jpeg" />
          </div>

          <div className="col-6">
            <StaticImage alt="images" src="../images/mt7.jpeg" />
          </div>
        </div>
      </div>
      <p>
        Hi there! I'm the proud creator of this site, which I built with Gatsby.
      </p>
    </Layout>
  );
};

export default AboutPage;
