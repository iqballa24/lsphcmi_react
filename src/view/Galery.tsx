import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Section from "elements/Section";

import Nav from "components/Nav";
import Hero from "components/Hero";
import Preloader from "components/Preloader";
import BtnToTop from "components/BtnToTop";
import Footer from "components/Footer";

import {
  imgDokumentasi1,
  imgDokumentasi2,
  imgDokumentasi3,
  imgDokumentasi4,
  imgDokumentasi5,
  imgDokumentasi6,
  imgDokumentasi7,
  imgDokumentasi8,
  imgDokumentasi9,
  imgDokumentasi10,
  imgDokumentasi11,
  imgDokumentasi12,
  imgDokumentasi13,
  imgDokumentasi14,
  imgDokumentasi15,
  imgDokumentasi16,
  imgDokumentasi17,
  imgDokumentasi18,
} from "data/image";

type Props = {
  refAboutSection: any;
};

type State = {
  refAboutSection: React.RefObject<HTMLInputElement>;
};


export default class Galery extends Component<Props, State> {
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
          <Section
            refAboutSection={this.state.refAboutSection}
            className="about-section"
          >
            <Container fluid className="gallery-container">
              <h1 className="h1-custom mb-5 text-center">
                Dokumentasi Kegiatan
              </h1>
              <Row>
                <Col lg={6} className="mb-5">
                  <Row>
                    <Col lg={6} md={6}>
                      <img
                        className="gallery-img1 img-hover__zoom-colorize"
                        src={imgDokumentasi1}
                        style={{ width: "100%" }}
                        alt="gallery-img1"
                      />
                    </Col>
                    <Col lg={6} md={6} className="align-self-center">
                      <Row>
                        <img
                          className="gallery-img2 img-hover__zoom-colorize"
                          src={imgDokumentasi2}
                          style={{ width: "100%" }}
                          alt="gallery-img2"
                        />
                        <img
                          className="gallery-img3 img-hover__zoom-colorize"
                          src={imgDokumentasi3}
                          style={{ width: "100%" }}
                          alt="gallery-img3"
                        />
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Row>
                    <Col lg={6} md={6}>
                      <img
                        className="gallery-img5 img-hover__zoom-colorize"
                        src={imgDokumentasi5}
                        style={{ width: "100%" }}
                        alt="gallery-img5"
                      />
                    </Col>
                    <Col lg={6} md={6}>
                      <Row>
                        <img
                          className="gallery-img6 img-hover__zoom-colorize"
                          src={imgDokumentasi6}
                          style={{ width: "100%" }}
                          alt="gallery-img6"
                        />
                        <img
                          className="gallery-img img-hover__zoom-colorize"
                          src={imgDokumentasi7}
                          style={{ width: "100%" }}
                          alt="gallery-img7"
                        />
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col lg={6} md={6}>
                  <img
                    className="gallery-img4 img-hover__zoom-colorize"
                    src={imgDokumentasi4}
                    style={{ width: "100%" }}
                    alt="gallery-img4"
                  />
                </Col>
                <Col lg={6} md={6}>
                  <img
                    className="gallery-img8 img-hover__zoom-colorize"
                    src={imgDokumentasi8}
                    style={{ width: "100%" }}
                    alt="gallery-img8"
                  />
                </Col>
              </Row>
              <Row>
                <Col lg={6} className="mb-md-5">
                  <Row>
                    <Col lg={6} md={6}>
                      <img
                        className="gallery-img9 img-hover__zoom-colorize"
                        src={imgDokumentasi9}
                        style={{ width: "100%" }}
                        alt="gallery-img9"
                      />
                    </Col>
                    <Col lg={6} md={6}>
                      <img
                        className="gallery-img10 img-hover__zoom-colorize"
                        src={imgDokumentasi10}
                        style={{ width: "100%" }}
                        alt="gallery-img10"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Row>
                    <Col lg={6} md={6}>
                      <img
                        className="gallery-img11 img-hover__zoom-colorize"
                        src={imgDokumentasi11}
                        style={{ width: "100%" }}
                        alt="gallery-img11"
                      />
                    </Col>
                    <Col lg={6} md={6}>
                      <img
                        className="img-hover__zoom-colorize"
                        src={imgDokumentasi12}
                        style={{ width: "100%" }}
                        alt="gallery-img12"
                      />
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col lg={6}>
                  <Row>
                    <Col lg={6} md={6} className="mb-sm-5 align-self-center">
                      <Row>
                        <img
                          className="gallery-img13 img-hover__zoom-colorize"
                          src={imgDokumentasi13}
                          style={{ width: "100%" }}
                          alt="gallery-img13"
                        />
                        <img
                          className="img-hover__zoom-colorize"
                          src={imgDokumentasi15}
                          style={{ width: "100%" }}
                          alt="gallery-img15"
                        />
                      </Row>
                    </Col>
                    <Col lg={6} md={6}>
                      <Row>
                        <img
                          className="img-hover__zoom-colorize"
                          src={imgDokumentasi14}
                          style={{ width: "100%" }}
                          alt="gallery-img14"
                        />
                      </Row>
                    </Col>
                  </Row>
                </Col>
                <Col lg={6}>
                  <Row>
                    <Col lg={6} md={6}>
                      <img
                        className="img-hover__zoom-colorize"
                        src={imgDokumentasi16}
                        style={{ width: "100%" }}
                        alt="gallery-img16"
                      />
                    </Col>
                    <Col lg={6} md={6} className="align-self-center">
                      <Row>
                        <img
                          className="gallery-img17 img-hover__zoom-colorize"
                          src={imgDokumentasi17}
                          style={{ width: "100%" }}
                          alt="gallery-img17"
                        />
                        <img
                          className="img-hover__zoom-colorize"
                          src={imgDokumentasi18}
                          style={{ width: "100%" }}
                          alt="gallery-img18"
                        />
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Section>
          <BtnToTop />
        </main>
        <Footer />
      </>
    );
  }
}
