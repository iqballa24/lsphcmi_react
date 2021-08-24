import React from "react";
import propTypes from "prop-types";

export default function Section(props) {
  const className = ["section"];
  className.push(props.className);
  if (props.isCenteredContent) className.push("text-center");

  return <section className={className.join(' ')}>{props.children}</section>;
}

Section.propTypes = {
  isCenteredContent: propTypes.bool,
  className: propTypes.string,
};
