import React from "react";
import Logo from "assets/img/vector/logo.svg";
import { Link } from "react-router-dom";

import Button from "elements/Button";
import Modal from "elements/Modal";

import vector_certificate from "assets/img/vector/vector_certificate.svg";
import vector_education from "assets/img/vector/vector_education.svg";

export default function Nav() {
  document.addEventListener("DOMContentLoaded", () => {
    //  change width nav button when hover
    const label = document.querySelector(".nav-container label");
    const span1 = document.querySelector(".nav-span:nth-of-type(1)");
    const span3 = document.querySelector(".nav-span:nth-of-type(3)");

    label.addEventListener("mouseover", () => {
      span1.style.width = "100%";
      span3.style.width = "100%";
    });

    label.addEventListener("mouseout", () => {
      span1.style.width = "50%";
      span3.style.width = "75%";
    });

    // triger action navbar on medium-small device
    const btn_toggler = document.querySelector("#btn-toggler");
    const navbar_menu = document.querySelector(".nav-menus");
    const btnCancel = document.querySelector(".btn-cancel");

    btn_toggler.onclick = (_) => {
      navbar_menu.classList.add("show");
      document.body.classList.add("disabledScroll");
    };
    btnCancel.onclick = (_) => {
      navbar_menu.classList.remove("show");
      document.body.classList.remove("disabledScroll");
    };

    let prevScrollpos = window.pageYOffset;

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

      // Hide navbar when scroll to bottom on desktop device
      if (screen.width >= 1024) {
        // Hide navbar when scroll bottom
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos) {
          document.getElementById("navbar").style.top = "0";
        } else {
          document.getElementById("navbar").style.top = "-100px";
        }
        prevScrollpos = currentScrollPos;
      }
    };
  });

  function openModalRegister() {
    document.getElementById("myModalRegister").style.display = "block";
  }

  function closeModalRegister() {
    document.getElementById("myModalRegister").style.display = "none";
  }

  return (
    <header>
      <nav className="nav">
        <div id="navbar" className="nav-container">
          <a href="javascript:void(0)" className="nav-logo">
            <img className="img-fluid logo" src={Logo} alt="logo" />
            <span className="logo-text">LSP HCMI</span>
          </a>
          <ul className="nav-menus">
            <div className="btn-cancel">
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
                <a onClick={openModalRegister}>Daftar</a>
              </Button>
            </li>
          </ul>
          <label id="btn-toggler" htmlFor="check">
            <input type="checkbox" id="check" />
            <span className="nav-span"></span>
            <span className="nav-span"></span>
            <span className="nav-span"></span>
          </label>
        </div>
      </nav>

      <Modal isRegister id="myModalRegister">
        <div className="modal-content">
          <span className="close cursor" onClick={closeModalRegister}>&times;</span>
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
