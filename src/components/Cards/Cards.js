import {
  Button,
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@material-ui/core";
import React, { Fragment, useState } from "react";
import { getMatchDetails } from "../../Api/Api";
import Image from "../Images/vs.jpg";
import "./Cards.css";

const Cards = ({ match }) => {
  const [details, setDetails] = useState({});
  const [open, setOpen] = useState(false);
  const click = (id) => {
    getMatchDetails(id)
      .then((data) => {
        console.log("Match", data);
        setDetails(data);
        handleOpen();
      })
      .catch((error) => console.log(error));
  };
  const getMatchCard = () => {
    return (
      <div style={{ display: "inline-block" }}>
        <Card
          style={{
            width: "18rem",
            height: "23rem",
            margin: "20px 24px",
            boxShadow: "5px 5px 5px #333333",
            background: match.matchStarted ? "grey" : "black",
            opacity: match.matchStarted ? "1" : "0.7",
          }}
        >
          <CardContent style={{ textAlign: "center" }}>
            <Typography variant="h6" style={{ color: "white" }}>
              {match["team-1"]}
            </Typography>
            <Typography>
              <img src={Image} width="100px" alt="" />
            </Typography>
            <Typography variant="h6" style={{ color: "white" }}>
              {match["team-2"]}
            </Typography>
          </CardContent>
          <CardActions>
            <Grid container justify="center">
              <Button
                onClick={() => {
                  click(match.unique_id);
                }}
                variant="contained"
                color="primary"
              >
                Show Details
              </Button>
              <Button
                variant="contained"
                style={{ width: "100%", marginTop: "10px" }}
                color="primary"
              >
                START: {new Date(match.dateTimeGMT).toLocaleString()}
              </Button>
            </Grid>
          </CardActions>
        </Card>
      </div>
    );
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const getModal = () => (
    <Dialog open={open} onClose={handleClose}>
      <DialogTitle id="alert-dialog-title">{"Match Details"}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          <Typography>{details.stat}</Typography>
          <Typography>TEAM1:{match["team-1"]}</Typography>
          <Typography>TEAM2:{match["team-2"]}</Typography>
          <Typography>
            Match:
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {details.matchStarted ? "Started" : "Still Not Started"}
            </span>
          </Typography>
          <Typography>
            Score:
            <span style={{ fontStyle: "italic", fontWeight: "bold" }}>
              {details.score}
            </span>
          </Typography>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose} color="primary" autofocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
  return (
    <Fragment>
      {getMatchCard()}
      {getModal()}
    </Fragment>
  );
};

export default Cards;
