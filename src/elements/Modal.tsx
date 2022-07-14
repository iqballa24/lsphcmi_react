import React from "react";

type Props = {
  isPrimary?: boolean;
  isRegister?: boolean;
  isOpen?: boolean;
  className: string;
  id: string;
  children: React.ReactNode;
};

export default function Modal(props: Props) {
  const className = [""];
  const id = [""];
  className.push(props.className);
  id.push(props.id);

  if (props.isPrimary) className.push("modal-box");
  if (props.isRegister) className.push("modal-daftar");

  return (
    <>
      {props.isOpen ? (
        <div id={id.join("")} className={className.join("")}>
          {props.children}
        </div>
      ) : (
        ""
      )}
    </>
  );
}
