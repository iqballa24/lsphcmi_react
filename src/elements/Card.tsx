import React from "react";
import propTypes from "prop-types";

type Props = {
  className: string;
  children: React.ReactNode;
};

export default function Card(props: Props) {
  const className = ["card"];
  className.push(props.className);

  return(
      <div className={className.join(" ")}>
          {props.children}
      </div>
  );
}

Card.propTypes = {
  className: propTypes.string,
};
