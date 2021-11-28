import React from "react";
import Logo from "assets/img/vector/logo.svg";
import { Link } from "react-router-dom";
import Button from "elements/Button";

export default function Nav() {
  document.addEventListener('DOMContentLoaded', ()=>{
    let prevScrollpos = window.pageYOffset;
    const btnToTop = document.getElementById("goto-top");
    
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
          btnToTop.style.bottom = "-100px";
        } else {
          document.getElementById("navbar").style.top = "-100px";
          btnToTop.style.bottom = "40px";
        }
        prevScrollpos = currentScrollPos;
      }
    };
  });


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
              <Button
                isPrimary
                onclick="openModalRegister()"
                href="javascript:void(0)"
              >
                Daftar
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
    </header>
  );
}
