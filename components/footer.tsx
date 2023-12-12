import Container from "./container";
import { EXAMPLE_PATH } from "../lib/constants";

const Footer = () => {
  return (
    <div className="footer contact-block flex flex-col gap-8 justify-center items-center mb-8">
      <div className="contact-title mb-8">CONTACT</div>{" "}
      <div className="insta-block">
        {/* <img src={"/assets/icons/icon-insta.svg"} className="mail-logo"></img> */}
        <div className="insta-text">@PAULFABREMUSIC</div>
      </div>
      <div className="mail-block">
        {" "}
        <div className="mail-text">PAULFABRE.BOOKING@GMAIL.COM</div>
      </div>
    </div>
  );
};

export default Footer;
