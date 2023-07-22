import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <>
      <div className="footer-container" id="contact">
        <div className="footer-text">
          <div className="text-top">Let's Get Connected</div>
          <div className="text-bottom">
            You can reach out to me using this form
          </div>
          <div className="footer-img"></div>
        </div>
        <div className="contact-box">
          <p>Contact Me</p>
          <div className="blank-fields">
            <form
              action="https://formsubmit.co/75cb8d6d53459db5e24dbf1458d6469b"
              method="POST"
            >
              <input
                type="text"
                className="input-box1 box1"
                name="name"
                placeholder="Your Name"
                required
              />
              <br />
              <input
                type="email"
                className="input-box2 box1"
                name="name"
                placeholder="Your Email"
                required
              />
              <br />
              <input
                type="text"
                className="input-box3 box1"
                name="name"
                placeholder="Subject"
              />
              <br />
              <textarea
                type="text"
                className="input-mesg mesg"
                name="name"
                placeholder="Message"
                required
              />
            </form>
            <button className="comic-button">Submit</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
