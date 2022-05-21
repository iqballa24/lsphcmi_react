import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Section from "elements/Section";
import ScemeSection from "elements/ScemeSection";

import Nav from "components/Nav";
import Hero from "components/Hero";
import Preloader from "components/Preloader";
import BtnToTop from "components/BtnToTop";
import Footer from "components/Footer";
import SchemePerencanaan from "components/Scheme/SchemePerancangan";
import SchemePengembangan from "components/Scheme/SchemePengembangan";
import SchemePengelolaan from "components/Scheme/SchemePengelolaan";

export default class Scheme extends Component {
  constructor(props) {
    super(props);
    this.refAboutSection = React.createRef();
  }

  render() {
    return (
      <>
        <Nav />
        <main>
          <Preloader />
          <Hero refAboutSection={this.refAboutSection} />

          {/* skema-perencanaan-section */}
          <Section
            refAboutSection={this.refAboutSection}
            className="skema-menu-section"
          >
            <SchemePerencanaan />
          </Section>

          {/* skema-pengembangan-section */}
          <Section className="skema-menu-section">
            <SchemePengembangan />
          </Section>

          {/* skema-pengelolaan-section */}
          <Section className="skema-menu-section">
            <SchemePengelolaan />
          </Section>
          <BtnToTop />
        </main>

        <Footer />
      </>
    );
  }
}
