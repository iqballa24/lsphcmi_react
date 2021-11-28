import React, { Component } from "react";
import Button from "elements/Button";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretUp } from "@fortawesome/free-solid-svg-icons";

export default class BtnToTop extends Component {
  constructor(props) {
    super(props);
    this.state = { btnIsShow: true };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState((prevState) => ({
      btnIsShow: !prevState.btnIsShow,
    }));
  }

  render() {
    document.addEventListener("DOMContentLoaded", () => {
      const btnToTop = document.querySelector("#goto-top");
      btnToTop.classList.remove('button')
    });

    return (
      <Button isFloat onClick={this.handleClick} id="goto-top">
        <FontAwesomeIcon icon={faCaretUp} className="my-float" />
      </Button>
    );
  }
}
