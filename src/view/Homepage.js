import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

import Button from "elements/Button";
import Section from "elements/Section";
import Card from "elements/Card";
import Modal from "elements/Modal";

import Nav from "components/Nav";
import Hero from "components/Hero";
import Preloader from "components/Preloader";
import Footer from "components/Footer";

import Logo from "assets/img/vector/logo-lsp.svg";
import SkemaImg from "assets/img/vector/card-skema.svg";
import CompetenceImg from "assets/img/vector/img-competens.svg";
import IconUnduh from "assets/img/vector/icon-unduh.svg";
import IconBerkas from "assets/img/vector/icon-berkas.svg";
import IconDaftar from "assets/img/vector/icon-daftar.svg";
import IconLaw from "assets/img/vector/codicon_law.svg";
import Calendar from "assets/img/calendar.jpg";

import SKKNI149 from "assets/pdf/SKKNI 2020-149.pdf.pdf";
import SKKNI79 from "assets/pdf/SKKNI No.072 Th.2019-Hubungan Industrial New.pdf";
import PERENCANAAN from "assets/pdf/SKEMA PERENCANAAN HC.docx";
import PENGEMBANGAN from "assets/pdf/SKEMA PENGEMBANGAN HC.docx";
import PENGELOLAAN from "assets/pdf/SKEMA PENGELOLAAN HUBUNGAN INDUSTRIAL.docx";

export default function Homepage() {
  const peserta = [
    {
      icon: faUser,
      desc: "BOD -1 s/d BOD -3",
    },
    {
      icon: faUser,
      desc: "Staff HRD",
    },
    {
      icon: faUser,
      desc: "Manajer",
    },
    {
      icon: faUser,
      desc: "Kepala Divisi",
    },
    {
      icon: faUser,
      desc: "Setiap orang yang ingin memiliki sertifikasi kompetensi HC",
    },
    {
      icon: faUser,
      desc: "BUMN, BUMD dan perusahaan swasta",
    },
  ];

  const listOfLaw = [
    "UU No.3 th.2003 tentang ketenagakerjaan.",
    "PP RI no.23 th.2004 tentang BNSP.",
    "PP RI no.31 th.2006 tentang sistem pelatihan kerja nasional.",
    "Peraturan Presiden Republik Indonesia no.8 th.2012 tentang kerangka kualifikasi Nasional Indonesia.",
    "Peraturan Menteri Tenaga Kerja dan Transmigrasi Republik Indonesia no.5 th.2012 tentang Sistem Standarisasi Kompetensi Kerja Nasional.",
  ];

  const openModalCalendar = () => {
    document.getElementById("myModalCalendar").style.display = "block";
  };

  const closeModalCalendar = () => {
    document.getElementById("myModalCalendar").style.display = "none";
  };

  window.onscroll = () => {
    const btn_toggler = document.querySelector("#btn-toggler");
    const nav = document.querySelector("#navbar");
    const logo = document.querySelector(".logo-text");

    // change color navbar when scroll
    if (window.scrollY <= 10) {
      nav.className = "nav-container";
      logo.style.color = "#fff";
      btn_toggler.style.top = "4.9rem";
      nav.style.paddingTop = "4rem";
    } else {
      nav.className = "nav-container scroll";
      logo.style.color = "#CF2932";
      btn_toggler.style.top = "3rem";
      nav.style.paddingTop = "2rem";
    }
  };

  return (
    <div>
      <Nav></Nav>
      <main>
        <Preloader></Preloader>
        <Hero></Hero>
        {/*-- Target btn scroll down -- */}
        <div id="scroll-down"></div>
        <Section className="about-section">
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
                  kompetensi atau klaster. LSP HCMI memiliki 3 skema kompetensi
                  yg mengacu pada SKKNI (
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
                  {peserta.map((list, index) => (
                    <Card className="card-peserta" key={index}>
                      <Row className="card-body">
                        <Col lg={2} sm={2} className="icon align-self-center">
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
                  onClick={openModalCalendar}
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
                    Bahan presentasi sesuai dengan skema masing-masing (Refer :
                    silahkan unduh <a href="/assets/pdf/SKKNI.zip">SKKNI</a>)
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
                  {listOfLaw.map((list, index) => (
                    <Col lg={4} md={6}>
                      <Card className="card-law" key={index}>
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
                          <p className="card-text">{list}</p>
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

        <Modal isCalendar id="myModalCalendar">
          <span className="close cursor" onClick={closeModalCalendar}>
            &times;
          </span>
          <div className="modal-content">
            <img src={Calendar} alt="calendar" style={{ width: 100 + "%" }} />
          </div>
        </Modal>

        <Button isFloat id="goto-top">
          <FontAwesomeIcon icon={faCaretUp} className="my-float" />
        </Button>
      </main>
      <Footer />
    </div>
  );
}
