import React from "react";

type Props = {
  isPrimary?: boolean,
  isSecondary?: boolean,
  isSkema?: boolean,
  isPdf?: boolean,
  isFloat?: boolean,
  className: string,
  id: string,
  children: React.ReactNode;
};

export default function Button(props: Props) {
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
