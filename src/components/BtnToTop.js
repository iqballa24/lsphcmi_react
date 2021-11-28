import React, { useState } from "react";
import Button from "elements/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default function BtnToTop() {
  let prevScrollpos = window.pageYOffset;

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", () => {
    const btnToTop = document.getElementById("goto-top");
    btnToTop.classList.remove('button')

    // Hide btnToTop when scroll to top on desktop device
    if (screen.width >= 1024) {
      // Hide btnToTop when scroll to top
      let currentScrollPos = window.pageYOffset;
      if (prevScrollpos > currentScrollPos) {
        btnToTop.style.bottom = "-100px";
      } else {
        btnToTop.style.bottom = "40px";
      }
      prevScrollpos = currentScrollPos;
    }
  });

  return (
    <Button isFloat id="goto-top">
      <FontAwesomeIcon
        icon={faCaretUp}
        className="my-float"
        onClick={scrollToTop}
      />
    </Button>
  );
}
