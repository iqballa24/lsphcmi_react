import React from "react";

type Props = {
  className: string;
  isCenteredContent?: boolean;
  children: React.ReactNode;
  refAboutSection?: any;
};

export default function Section(props: Props) {
  const className = ["section"];
  className.push(props.className);
  if (props.isCenteredContent) className.push("text-center");

  return <section className={className.join(" ")}>{props.children}</section>;
}
