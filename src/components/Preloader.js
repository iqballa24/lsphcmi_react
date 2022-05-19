import React, { useState, useEffect } from "react";
import Loader from "assets/img/Ripple-1.3s-211px.gif";

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 500);
  }, []);

  return (
    <>
      <div
        id="preloader"
        className="preloader"
        style={{ height: isLoading ? "100vh" : "0vh" }}
      >
        <div
          id="precontent"
          className="preloader-content"
          style={{ display: isLoading ? "absolute" : "none" }}
        >
          <img src={Loader} alt="preloader" width="85rem" />
        </div>
      </div>
    </>
  );
}
