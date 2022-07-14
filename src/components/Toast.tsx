import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

export const Toast = ({ message }:any) => {
  return (
    <div id="notif-info" className="notif-info show">
      <FontAwesomeIcon
        icon={faCheckCircle}
        style={{ fontSize: 1.6 + "rem", color: "#E74C3C" }}
      />{" "}
      {message}
    </div>
  );
};
