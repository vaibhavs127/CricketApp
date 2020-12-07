import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton color="inherit">
          <MenuIcon />
        </IconButton>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          Home
        </Link>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
