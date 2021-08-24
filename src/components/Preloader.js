import React from "react";
import Loader from "assets/img/Ripple-1.3s-211px.gif";

export default function Preloader() {
  window.onload = (_) => {
    // Load preloader
    function preloader() {
      const preloader = document.getElementById("preloader");
      const precontent = document.getElementById("precontent");
      preloader.style.height = "0vh";
      precontent.style.display = "none";
    }
    setTimeout(preloader, 500);
  };
  return (
    <div id="preloader" className="preloader">
      <div id="precontent" className="preloader-content">
        <img src={Loader} alt="preloader" width="85rem" />
      </div>
    </div>
  );
}
