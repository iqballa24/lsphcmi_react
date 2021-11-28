import React from "react";
import propTypes from "prop-types";

export default function Button(props) {
  const className = ["button"];
  const id = [""];

  id.push(props.id);
  className.push(props.className);
  if (props.isPrimary) className.push("button-primary");
  if (props.isSecondary) className.push("button-secondary");
  if (props.isSkema) className.push("button-skema");
  if (props.isPdf) className.push("button-pdf");
  if (props.isFloat) className.push("button-float");


  return <button id={id.join("")} className={className.join(" ")}>{props.children}</button>;
}

Button.propTypes = {
  isPrimary: propTypes.bool,
  isSecondary: propTypes.bool,
  isSkema: propTypes.bool,
  isPdf: propTypes.bool,
  isFloat: propTypes.bool,
  className: propTypes.string,
  id: propTypes.string
};
