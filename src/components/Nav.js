import React, { useEffect, useState, useRef } from "react";
import Logo from "assets/img/vector/logo.svg";
import { Link } from "react-router-dom";

import Button from "elements/Button";
import Modal from "elements/Modal";

import vector_certificate from "assets/img/vector/vector_certificate.svg";
import vector_education from "assets/img/vector/vector_education.svg";

export default function Nav() {
  const [isShow, setIsShow] = useState(false);
  const [registerIsShow, setRegisterIsShow] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollYIsless10, setScrollYIsLess10] = useState(true);
  const [showNav, setShowNav] = useState(0)
  const label = useRef(null);
  const [widthSpan1, setWidthSpan1] = useState(50);
  const [widthSpan3, setWidthSpan3] = useState(75);

  useEffect(() => {
    let prevScrollpos = window.pageYOffset;

    window.onscroll = () => {
      if (window.scrollY <= 10) {
        setScrollYIsLess10(true);
      } else {
        setScrollYIsLess10(false);
      }

      // // Hide navbar when scroll to bottom on desktop device
      if (screen.width >= 1024) {
        // Hide navbar when scroll bottom
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          setShowNav(0)
        } else {
          setShowNav(-100)
        }
        prevScrollpos = currentScrollPos;
      }
    };
  }, [lastScrollY]);

  const modalRegisterHandler = () => {
    setRegisterIsShow((prevState) => !prevState);
  };

  return (
    <header>
      <nav className="nav">
        <div
          id="navbar"
          className={scrollYIsless10 ? "nav-container" : "nav-container scroll"}
          style={{paddingTop: scrollYIsless10 ? '4rem' : '2rem', top: `${showNav}px`}}
        >
          <a href="#" className="nav-logo">
            <img className="img-fluid logo" src={Logo} alt="logo" />
            <span
              className="logo-text"
              style={{ color: scrollYIsless10 ? "#fff" : "#CF2932" }}
            >
              LSP HCMI
            </span>
          </a>
          <ul className={`nav-menus ${isShow ? "show" : ""}`}>
            <div
              className="btn-cancel"
              onClick={() => {
                setIsShow(false);
                document.body.classList.remove("disabledScroll");
              }}
            >
              <p>&#10006;</p>
            </div>
            <li>
              <Link className="nav-item" to="/">
                Beranda
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/about">
                Tentang
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/scheme">
                Skema
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/gallery">
                Galeri
              </Link>
            </li>
            <li>
              <Link className="nav-item" to="/contact">
                Kontak
              </Link>
            </li>
            <li>
              <Button isPrimary>
                <a onClick={modalRegisterHandler}>Daftar</a>
              </Button>
            </li>
          </ul>
          <label
            id="btn-toggler"
            htmlFor="check"
            onClick={() => {
              document.body.classList.add("disabledScroll");
              setIsShow(true);
            }}
            ref={label}
            onMouseEnter={() => {
              setWidthSpan1(100);
              setWidthSpan3(100);
            }}
            onMouseOver={() => {
              setWidthSpan1(50);
              setWidthSpan3(75);
            }}
            style={{top: scrollYIsless10 ? '4.9rem' : '3rem'}}
          >
            <input type="checkbox" id="check" />
            <span
              className="nav-span"
              style={{ width: `${widthSpan1}%` }}
            ></span>
            <span className="nav-span"></span>
            <span
              className="nav-span"
              style={{ width: `${widthSpan3}%` }}
            ></span>
          </label>
        </div>
      </nav>

      <Modal isRegister id="myModalRegister" isOpen={registerIsShow}>
        <div className="modal-content">
          <span className="close cursor" onClick={modalRegisterHandler}>
            &times;
          </span>
          <div className="row text-center">
            <div className="col-md-6">
              <div className="row">
                <div className="col-12 mb-5 sertifikasi-section">
                  <img
                    className="fluid"
                    src={vector_certificate}
                    alt="Sertifikasi LSP HCMI"
                  />
                </div>
                <div className="col-12">
                  <a
                    href="https://forms.gle/3a3tkBiFQHPFEGLc7"
                    className="button button-primary"
                    target="_blank"
                  >
                    Sertifikasi
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6 pelatihan-section">
              <div className="row">
                <div className="col-12 mb-5">
                  <img
                    className="fluid"
                    src={vector_education}
                    alt="Pelatihan LSP HCMI"
                  />
                </div>
                <div className="col-12">
                  <a
                    href="https://forms.gle/NLqUb8nmafUfxvLw9"
                    className="button button-primary"
                    target="_blank"
                  >
                    Pelatihan
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </header>
  );
}
