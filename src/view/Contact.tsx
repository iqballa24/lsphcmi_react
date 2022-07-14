import React, { Component } from "react";

import Section from "elements/Section";
import Nav from "components/Nav";
import Preloader from "components/Preloader";
import Footer from "components/Footer";
import BtnToTop from "components/BtnToTop";
import { Toast } from "components/Toast";
import { ContactLSP } from "data/image";

type Props = {
  refAboutSection: any;
};

type State = {
  refAboutSection: React.RefObject<HTMLInputElement>;
  isLoading: boolean;
  showMessage: boolean;
};

export default class Contact extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      isLoading: false,
      showMessage: false,
      refAboutSection: React.createRef(),
    };
  }

  onSubmitHandler = (e: any) => {
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxgeknhjdnQ6Gb8PL1rRjBKrZC5Dp0r8_Jqr2Snb3fw2J0wD224qFCHe7jW52Hvd72C/exec";
    const form = document.forms[1];

    this.setState({ isLoading: true });

    fetch(scriptURL, { method: "POST", body: new FormData(form) })
      .then((response) => {
        console.log("Success!", response);
        form.reset();
        this.setState({ showMessage: true });
        setTimeout(() => {
          this.setState({ showMessage: false });
        }, 3000);
      })
      .catch((error) => console.error("Error!", error.message))
      .finally(() => {
        this.setState({ isLoading: false });
      });
  };

  render() {
    return (
      <>
        <Nav />
        <main>
          <Preloader />
          <Section className="contact-section">
            <div className="contact-formBx">
              <form
                name="1"
                onSubmit={this.onSubmitHandler}
              >
                <h1 className="h1-custom">Get in touch</h1>
                <div className="inputBox">
                  <input type="text" name="nama" required />
                  <span>Full Name</span>
                </div>
                <div className="inputBox">
                  <input type="email" name="email" required />
                  <span>Email Address</span>
                </div>
                <div className="inputBox">
                  <textarea
                    name="pesan"
                    id=""
                    cols={30}
                    rows={10}
                    required
                  ></textarea>
                  <span>Type Your Message Here...</span>
                </div>
                {this.state.isLoading ? (
                  <button
                    type="submit"
                    className="button button-primary button-loading"
                  >
                    <span
                      className="spinner-border spinner-border-md"
                      role="status"
                      aria-hidden="true"
                    ></span>{" "}
                    Loading...
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="button button-primary button-kirim"
                  >
                    Submit
                  </button>
                )}
              </form>
            </div>
            <div className="contact-imgBx">
              <img src={ContactLSP} alt="Contact" />
            </div>
          </Section>

          {this.state.showMessage && (
            <Toast message="Your message was delivered" />
          )}
          <BtnToTop />
        </main>
        <Footer />
      </>
    );
  }
}
