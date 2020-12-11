import { Link } from "react-router-dom";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import EventIcon from "@material-ui/icons/Event";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import InfoIcon from "@material-ui/icons/Info";
import FormatListNumberedIcon from "@material-ui/icons/FormatListNumbered";
import Background from "../Images/back2.jpg";
import LiveCard from "../Cards/LiveCard";
import Back from "./Back";
import Footer from "./Footer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const sectionStyle = {
  width: "100%",
  height: "620px",
  backgroundImage: `url(${Background})`,
  backgroundSize: "cover",
};

function MainPage() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Cricket App
          </Typography>
          <Button>
            <Link
              to="/Data"
              style={{
                color: "white",
                textDecoration: "none",
              }}
            >
              <IconButton>
                <EventIcon style={{ color: "white" }} />
              </IconButton>
              Upcomming Matches
            </Link>
          </Button>
          <Button>
            <Link to="/News" style={{ color: "white", textDecoration: "none" }}>
              <IconButton>
                <InfoIcon style={{ color: "white" }} />
              </IconButton>
              Cricket News
            </Link>
          </Button>
          <Button>
            <Link to="/ODI" style={{ color: "white", textDecoration: "none" }}>
              <IconButton>
                <FormatListNumberedIcon style={{ color: "white" }} />
              </IconButton>
              Cricket Ranking
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
      <section style={sectionStyle}>
        <LiveCard />
        {/* <Back /> */}
        <Footer />
      </section>
    </div>
  );
}

export default MainPage;
