import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

import Section from "elements/Section";

import Nav from "components/Nav";
import Hero from "components/Hero";
import Preloader from "components/Preloader";
import BtnToTop from "components/BtnToTop";
import Footer from "components/Footer";
import Modal from "elements/Modal";

import {
  ServiceLSP,
  BackgroundLSP,
  VisiMisiLSP,
  StructureLSP,
} from "data/image";

export default class About extends Component {
  constructor(props) {
    super(props);
    this.refAboutSection = React.createRef();
    this.state = { structurIsOpen: false };
  }

  render() {
    return (
      <>
        <Nav />
        <main>
          <Preloader />
          <Hero refServiceSection={this.refServiceSection} />

          {/* Service Section */}
          <Section
            refServiceSection={this.refServiceSection}
            className="about-section"
          >
            <Container>
              <Row className="flex-column-reverse flex-lg-row">
                <Col lg={6} className="align-self-center">
                  <h1 className="h1-custom mb-5">
                    Lembaga Sertifikasi Profesi Human Capital Management
                    Indonesia
                  </h1>
                  <p className="mb-5">
                    LSP HCMI adalah LSP Pihak 3 yang akan melayani seluruh
                    karyawan BUMN dan BUMD juga karyawan swasta atau siapa saja
                    yang membutuhkan sertifikasi bidang SDM / Human Capital
                  </p>
                  <ul className="service-section-list">
                    <li>
                      <p>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ fontSize: 1.6 + "rem", color: "#E74C3C" }}
                        />{" "}
                        Akte Pendirian oleh Notaris Ratih Budiarti SH, sesuai
                        Akta Nomor 4 tahun 2020.
                      </p>
                    </li>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ fontSize: 1.6 + "rem", color: "#E74C3C" }}
                        />{" "}
                        Pengesahan dari Kementerian Hukum dan Ham nomor :
                        AHU-0006573.AH.01.04 Tahun 2020 tanggal 8 April 2020.
                      </p>
                    </li>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ fontSize: 1.6 + "rem", color: "#E74C3C" }}
                        />{" "}
                        Nomor Induk Berusaha nomor ; 0220106601103.
                      </p>
                    </li>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ fontSize: 1.6 + "rem", color: "#E74C3C" }}
                        />{" "}
                        NPWP : 94.810.105.0-036.000.
                      </p>
                    </li>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ fontSize: 1.6 + "rem", color: "#E74C3C" }}
                        />{" "}
                        Rekening Perusahaan : BRI 116701000254305 a.n LSP HCMI.
                      </p>
                    </li>
                  </ul>
                </Col>
                <Col lg={6} className="mb-5 text-center">
                  <img
                    className="fluid"
                    src={ServiceLSP}
                    alt="service section"
                  />
                </Col>
              </Row>
            </Container>
          </Section>

          {/* Background Section */}
          <Section className="background-section">
            <Container>
              <Row>
                <Col lg={6} className="align-self-center text-center mb-5">
                  <img
                    className="fluid"
                    src={BackgroundLSP}
                    alt="service section"
                  />
                </Col>
                <Col lg={6}>
                  <h1 className="h1-custom mb-5">
                    Latar Belakang Pendirian LSP HCMI
                  </h1>
                  <ul className="background-section-list">
                    <li>
                      <p>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ fontSize: 1.6 + "rem", color: "#E74C3C" }}
                        />{" "}
                        Rencana Strategis Kementerian BUMN dalam persiapan Super
                        Holding dan BUMN University yg membutuhkan kompetensi
                        khusus.
                      </p>
                    </li>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ fontSize: 1.6 + "rem", color: "#E74C3C" }}
                        />{" "}
                        Belum memiliki kompetensi dengan standar global dengan
                        pendekatan digitalisasi.
                      </p>
                    </li>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ fontSize: 1.6 + "rem", color: "#E74C3C" }}
                        />{" "}
                        Adanya gap kompetensi dan kemampuan para pengelola
                        dibidang HC BUMN.
                      </p>
                    </li>
                    <li>
                      <p>
                        <FontAwesomeIcon
                          icon={faCheckCircle}
                          style={{ fontSize: 1.6 + "rem", color: "#E74C3C" }}
                        />{" "}
                        Adanya tuntutan wajib sertifikasi bagi pejabat yang akan
                        menduduki jabatan bidang SDM sesuai SE Menaker Nomor : 5
                        tahun 2019 yang menyatakan wajib memiliki sertifikasi
                        bidang SDM bagi karyawan yang menduduki jabatan bidang
                        SDM dan berlaku efektif bulan Juli 2021.
                      </p>
                    </li>
                  </ul>
                  <p>
                    LSP HCMI adalah LSP Pihak 3 yang akan melayani seluruh
                    karyawan BUMN dan BUMD juga karyawan swasta atau siapa saja
                    yang membutuhkan sertifikasi bidang SDM / Human Capital.
                  </p>
                </Col>
              </Row>
            </Container>
          </Section>

          {/* visi misi section */}
          <Section className="visimisi-section">
            <Container>
              <Row className="flex-column-reverse flex-lg-row">
                <Col lg={6}>
                  <Row>
                    <Col lg={12} className="mb-5">
                      <h1 className="h1-custom mb-5">Visi</h1>
                      <p>
                        Mewujudkan pengelolaan bidang Human Capital Management
                        yang memenuhi standar kelas dunia dan terpeliharanya
                        kompetensi Pengelola Sumber Daya Manusia yang unggul
                        serta berdaya saing global.
                      </p>
                    </Col>
                    <Col>
                      <h1 className="h1-custom mb-5">Misi</h1>
                      <ul className="visimisi-section-list">
                        <li>
                          <p>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              style={{
                                fontSize: 1.6 + "rem",
                                color: "#E74C3C",
                              }}
                            />{" "}
                            Menyelenggarakan sertifikasi profesi bidang human
                            capital management dalam rangka mendukung
                            efektifitas proses bisnis HCM Indonesia.
                          </p>
                        </li>
                        <li>
                          <p>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              style={{
                                fontSize: 1.6 + "rem",
                                color: "#E74C3C",
                              }}
                            />{" "}
                            Memelihara kompetensi kerja di sector pengelola
                            human capital yang unggul dan berdaya saing global.
                          </p>
                        </li>
                        <li>
                          <p>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              style={{
                                fontSize: 1.6 + "rem",
                                color: "#E74C3C",
                              }}
                            />{" "}
                            Mengembangkan system sertifikasi profesi human
                            capital management berbasis digital.
                          </p>
                        </li>
                        <li>
                          <p>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              style={{
                                fontSize: 1.6 + "rem",
                                color: "#E74C3C",
                              }}
                            />{" "}
                            Mengembangkan dan memelihara skema-skema sertifikasi
                            bidang Human Capital dlingkungan BUMN dengan profil
                            kompetensi jabatan yang dipersyaratkan.
                          </p>
                        </li>
                        <li>
                          <p>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              style={{
                                fontSize: 1.6 + "rem",
                                color: "#E74C3C",
                              }}
                            />{" "}
                            Menyediakan tenaga assessor kompetensi yang
                            professional, berkualifikasi dan bersertifikasi
                            sesuai dengan ruang lingkup sertifikasi LSP HCMI.
                          </p>
                        </li>
                        <li>
                          <p>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              style={{
                                fontSize: 1.6 + "rem",
                                color: "#E74C3C",
                              }}
                            />{" "}
                            Menyiapkan Tempat Uji Kompetensi (TUK) yang
                            terverifikasi sesuai dengan kebutuhan masing-masing
                            skema Human Capital.
                          </p>
                        </li>
                        <li>
                          <p>
                            <FontAwesomeIcon
                              icon={faCheckCircle}
                              style={{
                                fontSize: 1.6 + "rem",
                                color: "#E74C3C",
                              }}
                            />{" "}
                            Menyiapkan dukungan teknologi informasi dan sumber
                            daya manusia.
                          </p>
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>
                <Col className="mb-5">
                  <img
                    className="fluid"
                    src={VisiMisiLSP}
                    alt="visi misi section"
                  />
                </Col>
              </Row>
            </Container>
          </Section>

          {/* Structure section */}
          <Section className="structure-section text-center">
            <Container>
              <Row>
                <Col lg={12} className="mb-5">
                  <h1>Struktur Organisasi</h1>
                </Col>
                <Col>
                  <img
                    className="fluid"
                    src={StructureLSP}
                    alt="structure section"
                    onClick={() => this.setState({ structurIsOpen: true })}
                    style={{ cursor: "zoom-in" }}
                  />
                </Col>
              </Row>
            </Container>
          </Section>

          <Modal
            isPrimary
            id="myModalStruktur"
            isOpen={this.state.structurIsOpen}
          >
            <span
              className="close cursor"
              onClick={() => this.setState({ structurIsOpen: false })}
            >
              &times;
            </span>
            <div className="modal-content">
              <img src={StructureLSP} alt="calendar" style={{ width: 100 + "%" }} />
            </div>
          </Modal>

          <BtnToTop />
        </main>
        <Footer />
      </>
    );
  }
}
