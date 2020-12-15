import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import TeamData from "./Flags.json";
import {
  Button,
  CardActions,
  CardContent,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 160,
  },
});

function Back() {
  const classes = useStyles();
  fetch("./Flags.json")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div style={{ backgroundColor: "lightblue" }}>
      {TeamData.map((datas) => (
        <div className="cont" style={{ display: "inline-block" }}>
          <Card
            style={{
              width: "18rem",
              height: "19rem",
              background: "white",
              margin: "24px",
              marginTop: "40px",
              boxShadow: "5px 10px 5px #333333",
              borderRadius: "50px",
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={datas.img}
                title="Contemplative Reptile"
              />
            </CardActionArea>
            <CardContent
              style={{ textAlign: "center", textTransform: "uppercase" }}
            >
              <Typography variant="h6">Team: {datas.team}</Typography>
              <Typography>Captain: {datas.Captain}</Typography>
              <Button
                variant="outlined"
                color="primary"
                style={{ marginTop: "15px" }}
              >
                <a
                  href={datas.url}
                  target="_blank"
                  style={{ textDecoration: "none" }}
                >
                  Read More
                </a>
              </Button>
            </CardContent>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Back;
