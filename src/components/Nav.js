import React from "react";
import Logo from "assets/img/vector/logo.svg";
import { Link } from "react-router-dom";
import Button from "elements/Button";

export default function Nav() {

  return (
    <header>
      <nav className="nav">
        <div id="navbar" className="nav-container">
          <a href="javascript:void(0)" className="nav-logo">
            <img
              className="img-fluid logo"
              src={Logo}
              alt="logo"
            />
            <span className="logo-text">LSP HCMI</span>
          </a>
          <ul className="nav-menus">
            <div className="btn-cancel">
              <p>&#10006;</p>
            </div>
            <li>
                <Link className="nav-item" to="/">Beranda</Link>
            </li>
            <li>
                <Link className="nav-item" to="/about">Tentang</Link>
            </li>
            <li>
                <Link className="nav-item" to="/scheme">Skema</Link>
            </li>
            <li>
                <Link className="nav-item" to="/gallery">Galeri</Link>
            </li>
            <li>
                <Link className="nav-item" to="/contact">Kontak</Link>
            </li>
            <li>
              <Button isPrimary
                onclick="openModalRegister()"
                href="javascript:void(0)"
              >
                Daftar
              </Button>
            </li>
          </ul>
          <label id="btn-toggler" for="check">
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