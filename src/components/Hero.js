import React from "react";

export default function Hero(props) {
  function showAboutSection() {
    window.scrollTo({
      top: props.refAboutSection.current + 600,
      behavior: "smooth",
    });
  }

  return (
    <section className="carousel-section">
      <div className="carousel-text">
        <h1>Lembaga Sertifikasi Profesi Human Capital Management Indonesia</h1>
        <a href="#" className="scroll-down" address="true" onClick={showAboutSection}></a>
      </div>
    </section>
  );
}
