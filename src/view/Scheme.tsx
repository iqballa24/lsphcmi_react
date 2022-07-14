import React, { Component } from "react";

import Section from "elements/Section";

import Nav from "components/Nav";
import Hero from "components/Hero";
import Preloader from "components/Preloader";
import BtnToTop from "components/BtnToTop";
import Footer from "components/Footer";
import SchemePerencanaan from "components/Scheme/SchemePerancangan";
import SchemePengembangan from "components/Scheme/SchemePengembangan";
import SchemePengelolaan from "components/Scheme/SchemePengelolaan";

type Props = {
  refAboutSection: any;
};

type State = {
  refAboutSection: React.RefObject<HTMLInputElement>;
};

export default class Scheme extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { refAboutSection: React.createRef() };
  }

  render() {
    return (
      <>
        <Nav />
        <main>
          <Preloader />
          <Hero refAboutSection={this.state.refAboutSection} />

          {/* skema-perencanaan-section */}
          <Section
            refAboutSection={this.state.refAboutSection}
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
