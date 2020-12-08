import React from "react";
import "./Footer.css";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function Footer() {
  return (
    <div>
      <footer className="footer-distributed">
        <div className="footer-left">
          <h3>
            Cricket<span>App</span>
          </h3>

          <p className="footer-links">
            <a href="#" className="link-1">
              Home
            </a>

            <a href="#">Blog</a>

            <a href="#">Pricing</a>

            <a href="#">About</a>

            <a href="#">Faq</a>

            <a href="#">Contact</a>
          </p>
        </div>

        <div className="footer-center">
          <div>
            <RoomIcon />
            <p>
              <span>444 S. Cedros Ave</span> Solana Beach, California
            </p>
          </div>

          <div>
            <PhoneIcon />
            <p>+1.555.555.5555</p>
          </div>

          <div>
            <EmailIcon />
            <p>
              <a href="mailto:support@company.com">support@company.com</a>
            </p>
          </div>
        </div>

        <div className="footer-right">
          <p className="footer-company-about">
            <span>About the company</span>
            Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce
            euismod convallis velit, eu auctor lacus vehicula sit amet.
          </p>

          <div className="footer-icons">
            <a href="#">
              <FacebookIcon />
            </a>
            <a href="#">
              <TwitterIcon />
            </a>
            <a href="#">
              <LinkedInIcon />
            </a>
            <a href="#">
              <GitHubIcon />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
