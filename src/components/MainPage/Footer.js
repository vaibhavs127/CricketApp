import React from "react";
import "./Footer.css";
import RoomIcon from "@material-ui/icons/Room";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import { Grid } from "@material-ui/core";

function Footer() {
  return (
    <div class="wrapper">
      <footer>
        <h1>
          Cricket<span style={{ color: "blue" }}>App</span>
        </h1>
        <div>
          <FacebookIcon />
          <TwitterIcon />
          <LinkedInIcon />
          <GitHubIcon />
        </div>
      </footer>
    </div>
  );
}

export default Footer;
