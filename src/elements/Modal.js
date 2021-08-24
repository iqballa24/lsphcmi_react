import React from "react";
import propTypes from "prop-types";

export default function Modal(props) {
  const className = [""];
  const id = [""];
  className.push(props.className);
  id.push(props.id);

  if(props.isCalendar) className.push('modal-box')
  if(props.isRegister) className.push('modal-daftar')

  return <div id={id.join("")} className={className.join("")}>{props.children}</div>;
}

Modal.prototype = {
  isCalendar: propTypes.bool,
  isRegister: propTypes.bool,
  className: propTypes.string,
  id: propTypes.string,
};
