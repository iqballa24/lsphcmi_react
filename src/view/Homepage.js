import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Button from "elements/Button";
import Section from "elements/Section";
import Card from "elements/Card";
import Modal from "elements/Modal";

import Nav from "components/Nav";
import Hero from "components/Hero";
import Preloader from "components/Preloader";
import Footer from "components/Footer";
import BtnToTop from "components/BtnToTop";

import peserta from "data/constant/peserta";
import listOfLaw from "data/constant/listOfLaw";

import {
  Calendar,
  pelatihanImg,
  Ujikom1Img,
  Ujikom2Img,
  Pelatihan2Img,
  Logo,
  SkemaImg,
  CompetenceImg,
  IconUnduh,
  IconBerkas,
  IconDaftar,
  IconLaw,
} from "data/image";

import {
  SKKNI149,
  SKKNI79,
  PERENCANAAN,
  PENGELOLAAN,
  PENGEMBANGAN,
} from "data/pdf";

export default class Homepage extends Component {
  constructor(props) {
    super(props);
    this.refAboutSection = React.createRef();
    this.state = { calendarIsOpen: false };
  }

  render() {
    return (
      <div>
        <Nav />
        <main>
          <Preloader />
          <Hero refAboutSection={this.refAboutSection} />
          <Section
            refAboutSection={this.refAboutSection}
            className="about-section"
          >
            <Container>
              <Row className="flex-column-reverse flex-lg-row">
                <Col lg={9} className="align-self-center about-text">
                  <h1 className="h1-custom">Tentang LSP HCMI</h1>
                  <p className="mt-5">
                    LSP HCMI adalah LSP Pihak 3 yang akan melayani seluruh
                    karyawan BUMN dan BUMD juga karyawan swasta atau siapa saja
                    yang membutuhkan sertifikasi bidang SDM / Human Capital
                  </p>
                  <Link to="/about">
                    <Button isSecondary className="mt-5">
                      Selengkapnya
                    </Button>
                  </Link>
                </Col>
                <Col lg={3} className="about-img text-center">
                  <img
                    className="fluid"
                    src={Logo}
                    alt="logo LSP HCMI"
                    style={{ maxWidth: 20 + "rem" }}
                  />
                </Col>
              </Row>
            </Container>
          </Section>
          <Section className="skema-section">
            <Container>
              <Row>
                <Col lg={6}>
                  <img
                    className="fluid text-center"
                    src={SkemaImg}
                    alt="skema sertifikasi"
                  />
                </Col>
                <Col lg={6} className="align-self-center skema-text">
                  <h1 className="h1-custom mb-5">Skema Sertifikasi</h1>
                  <p>
                    LSP HCMI mengacu pada skema sertifikasi berdasarkan paket
                    kompetensi atau klaster. LSP HCMI memiliki 3 skema
                    kompetensi yg mengacu pada SKKNI (
                    <a className="text-link" href={SKKNI149} target={`_blank`}>
                      SKKNI No.149 Tahun 2020
                    </a>
                    ,{" "}
                    <a className="text-link" href={SKKNI79} target="_blank">
                      SKKNI No. 72 Tahun 2019
                    </a>
                    ) yaitu skema perencanaan human capital, skema pengembangan
                    human capital, dan skema pengelolaan hubungan industrial.
                  </p>
                  <Link to="/scheme">
                    <Button isSecondary className="mt-5">
                      Selengkapnya
                    </Button>
                  </Link>
                </Col>
              </Row>
            </Container>
          </Section>
          <Section className="peserta-section">
            <Container>
              <Row>
                <Col lg={6} className="align-self-center">
                  <h1 className="h1-custom mb-5">
                    Peserta <br /> Uji kompetensi
                  </h1>
                  <div className="overflow-y">
                    {peserta.map((list) => (
                      <div key={list.id}>
                        <Card className="card-peserta">
                          <Row className="card-body">
                            <Col
                              lg={2}
                              sm={2}
                              className="icon align-self-center"
                            >
                              <FontAwesomeIcon
                                icon={list.icon}
                                style={{ fontSize: 1.6 + "rem" }}
                              />
                            </Col>
                            <Col lg={10} sm={10} className="align-self-center">
                              <p className="mt-auto mb-auto">{list.desc}</p>
                            </Col>
                          </Row>
                        </Card>
                      </div>
                    ))}
                  </div>
                </Col>
                <Col lg={6} className="right-side">
                  <img
                    className="fluid"
                    src={CompetenceImg}
                    alt="Peserta kompetensi"
                  />
                </Col>
              </Row>
            </Container>
          </Section>
          <Section isCenteredContent className="step-section">
            <Container>
              <Row>
                <Col lg={12} sm={12} className="mb-5">
                  <h1 className="h1-custom">3 Tahap Mudah Untuk Mendaftar</h1>
                </Col>
                <Col lg={12} sm={12}>
                  <Row>
                    <Col lg={4} className="step-box">
                      <object
                        className="step-icon"
                        type="image/svg+xml"
                        data={IconUnduh}
                      ></object>
                      <h1>Unduh Form APL 01 & APL02</h1>
                      <p>
                        Unduh sesuai dengan skema
                        <br /> yang ingin di ambil
                      </p>
                    </Col>
                    <Col lg={4} className="step-box">
                      <object
                        className="step-icon"
                        type="image/svg+xml"
                        data={IconBerkas}
                      ></object>
                      <h1>Melengkapi Berkas</h1>
                      <p>
                        Lengkapi berkas syarat <br /> pendaftaran
                      </p>
                    </Col>
                    <Col lg={4} className="step-box">
                      <object
                        className="step-icon"
                        type="image/svg+xml"
                        data={IconDaftar}
                      ></object>
                      <h1>Klik button daftar</h1>
                      <p>
                        Klik button daftar yang <br /> terdapat di kanan atas
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Section>
          <Section className="schedule-section">
            <Container>
              <Row>
                <Col lg={12} sm={12} className="mb-5 text-center">
                  <h1 className="mb-5">Jadwal Uji kompetensi</h1>
                  <img
                    className="schedule-calendar"
                    src={Calendar}
                    alt="jadwal uji kompetensi"
                    onClick={() => this.setState({ calendarIsOpen: true })}
                    style={{ cursor: "zoom-in" }}
                  />
                </Col>
                <Col lg={12} sm={12} className="mb-5">
                  <h1 className="mb-5">Syarat Berkas Pendaftaran</h1>
                  <ul className="list-syarat">
                    <li className="list-item">
                      Sertifikat yang Relevan / Surat atau Program Penghargaan /
                      SK.Jabatan / Rekomendasi Pimpinan
                    </li>
                    <li className="list-item">CV</li>
                    <li className="list-item">Ijazah</li>
                    <li className="list-item">
                      Bukti hasil kerja : produk / dokumen yang pernah dibuat
                    </li>
                    <li className="list-item">
                      Pas foto 3x4 (4 lembar background merah)
                    </li>
                    <li className="list-item">KTP</li>
                    <li className="list-item">
                      Bahan presentasi sesuai dengan skema masing-masing (Refer
                      : silahkan unduh <a href="/assets/pdf/SKKNI.zip">SKKNI</a>
                      )
                    </li>
                  </ul>
                </Col>
                <Col lg={12} sm={12}>
                  <h1 id="apl" className="mb-5 text-center">
                    Dokumen APL 01 & APL 02
                  </h1>
                  <Row>
                    <Col md={4} className="text-center">
                      <a href={PERENCANAAN} download target={"_blank"}>
                        <Button isSkema>
                          Unduh Skema Perencanaan Human{" "}
                          <br className="d-none d-xl-block" />
                          Capital
                        </Button>
                      </a>
                    </Col>
                    <Col md={4} className="text-center">
                      <a href={PENGEMBANGAN} download target={"_blank"}>
                        <Button isSkema>
                          Unduh Skema Pengembangan Human Capital
                        </Button>
                      </a>
                    </Col>
                    <Col md={4} className="text-center">
                      <a href={PENGELOLAAN} download target={"_blank"}>
                        <Button isSkema>
                          Unduh Skema Pengelolaan Hubungan Industrial
                        </Button>
                      </a>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Section>
          <Section isCenteredContent className="law-section">
            <Container>
              <Row>
                <Col lg={12} sm={12} className="mb-5">
                  <h1 className="h1-custom">Dasar Hukum</h1>
                </Col>
                <Col lg={12} sm={12}>
                  <Row>
                    {listOfLaw.map((list) => (
                      <Col lg={4} md={6} key={list.id}>
                        <Card className="card-law">
                          <img
                            src={IconLaw}
                            className="fluid card-img-top"
                            alt="Dasar hukum"
                            style={{
                              maxWidth: 8 + "rem",
                              marginLeft: "auto",
                              marginRight: "auto",
                            }}
                          ></img>
                          <div className="card-body">
                            <p className="card-text">{list.value}</p>
                          </div>
                        </Card>
                      </Col>
                    ))}
                  </Row>
                </Col>
              </Row>
            </Container>
          </Section>
          <Section isCenteredContent className="komitmen-section">
            <Container>
              <Row>
                <Col lg={12} sm={12} className="mb-5">
                  <h1 className="h1-custom">Komitmen Manajemen</h1>
                </Col>
                <Col lg={12} sm={12}>
                  <p>
                    LSP HCMI mempunyai berkomitmen terhadap ketidakberpihakan,
                    mengelola konflik kepentingan, dan menjamin obyektivitas
                    kegiatan sertifikasi profesi serta mendukung terwujudnya
                    proses sertifikasi yg jujur, profesional, dan peduli pada
                    kompetensi insani
                  </p>
                </Col>
              </Row>
            </Container>
          </Section>
          <Section isCenteredContent className="galery-section">
            <Container>
              <h1 className="h1-custom mb-5">Dokumentasi Kegiatan</h1>
              <Row className="mb-5">
                <Col lg={5} className="mb-5" style={{ overflow: "hidden" }}>
                  <img
                    className="fluid img-hover__zoom-colorize"
                    src={pelatihanImg}
                    alt="pelatihan"
                  />
                </Col>
                <Col lg={7}>
                  <Row>
                    <Col
                      lg={12}
                      className="mb-5"
                      style={{ overflow: "hidden" }}
                    >
                      <img
                        className="fluid img-hover__zoom-colorize"
                        src={Ujikom1Img}
                        alt="ujikom1"
                      />
                    </Col>
                    <Col
                      lg={12}
                      className="mb-5"
                      style={{ overflow: "hidden" }}
                    >
                      <img
                        className="fluid img-hover__zoom-colorize"
                        src={Pelatihan2Img}
                        alt="pelatihan2"
                      />
                    </Col>
                  </Row>
                </Col>
                <Col lg={12} style={{ overflow: "hidden" }}>
                  <img
                    className="fluid img-hover__zoom-colorize"
                    src={Ujikom2Img}
                    alt="ujikom2"
                  />
                </Col>
              </Row>
              <Row>
                <p>
                  <a href="/" className="galery-p">
                    See more
                  </a>
                </p>
              </Row>
            </Container>
          </Section>

          <Modal
            isCalendar
            id="myModalCalendar"
            isOpen={this.state.calendarIsOpen}
          >
            <span
              className="close cursor"
              onClick={() => this.setState({ calendarIsOpen: false })}
            >
              &times;
            </span>
            <div className="modal-content">
              <img src={Calendar} alt="calendar" style={{ width: 100 + "%" }} />
            </div>
          </Modal>

          <BtnToTop />
        </main>
        <Footer />
      </div>
    );
  }
}
