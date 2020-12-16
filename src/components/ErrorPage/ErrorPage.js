import React from "react";
import "./ErrorPage.css";
import Error from "../Images/error.jpg";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { Link } from "react-router-dom";
import Nav from "../News/Nav";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

function ErrorPage() {
  const classes = useStyles();
  return (
    <div>
      <Nav />
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <div class="mainbox">
              <div class="err">4</div>
              <i class="far fa fa-exclamation-circle fa-spin"></i>
              <div class="err2">4</div>
              <div class="msg1">Page Not Found</div>
              <div class="msg">
                It's Look Like You Lost Somewhere...
                <div style={{ marginTop: "35px" }}>
                  <Button variant="contained" color="primary">
                    <ArrowBackIcon />
                    <Link
                      to="/"
                      style={{ textDecoration: "none", color: "white" }}
                    >
                      Go Back
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <img src={Error} alt="" width="100%" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}
export default ErrorPage;
