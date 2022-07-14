import React from "react";

export default function Hero(props: any) {
  function showAboutSection() {
    window.scrollTo({
      top: props.refAboutSection.current + 600,
      behavior: "smooth",
    });
    console.log('tester')
  }

  return (
    <section className="carousel-section">
      <div className="carousel-text">
        <h1>Lembaga Sertifikasi Profesi Human Capital Management Indonesia</h1>
        <a href="#" className="scroll-down" onClick={showAboutSection}></a>
      </div>
    </section>
  );
}
