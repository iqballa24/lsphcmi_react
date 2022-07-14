import React from "react";
import Section from "elements/Section";
import { Container, Row, Col } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faEnvelope,
  faMapMarker,
} from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer>
      <Section className="footer-section">
        <Container fluid>
          <Row>
            <Col lg={5} className="footer-section-map">
              <iframe
                className="map"
                src="https://maps.google.com/maps?q=Jl.%20Jatinegara%20Barat%20II%20Nomor%2011%20RT.%2014%20/%20RW.%2002%20Jatinegara,%20Balimester%20Jakarta%20Timur&t=&z=17&ie=UTF8&iwloc=&output=embed"
                style={{ border: 0, width: 100 + "%", height: 354 + "px" }}
              ></iframe>
            </Col>
            <Col lg={7} className="footer-section-info align-self-center">
              <Row>
                <Col lg={6}>
                  <h1 className="mb-4">LSP HCMI</h1>
                  <p>
                    LSP HCMI adalah LSP Pihak 3 yang akan melayani seluruh
                    karyawan BUMN dan BUMD juga karyawan swasta atau siapa saja
                    yang membutuhkan sertifikasi bidang SDM / Human Capital
                  </p>
                </Col>
                <Col lg={6}>
                  <h1 className="mb-4">Hubungi Kami</h1>
                  <p className="mb-4">
                    <FontAwesomeIcon icon={faMapMarker} /> Jl. Jatinegara Barat
                    II Nomor 11 RT. 14 / RW. 02 Jatinegara, Balimeste, Jakarta
                    Timur
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faPhone} /> 021-2119-3636
                  </p>
                  <p>
                    <FontAwesomeIcon icon={faEnvelope} /> admin@lsphcmi.com
                  </p>
                </Col>
              </Row>
            </Col>
            <Col lg={12} sm={12} className="footer-section-cprt">
              <p style={{ color: "#" + 444444 }}>
                Copyright 2021 LSP HCMI. All rights reserved.
              </p>
            </Col>
          </Row>
        </Container>
      </Section>
    </footer>
  );
}
