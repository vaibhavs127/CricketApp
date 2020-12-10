import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import { makeStyles } from "@material-ui/core/styles";
import TeamData from "./Flags.json";

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
    <div>
      {TeamData.map((datas) => (
        <div className="cont" style={{ display: "inline-block" }}>
          <Card
            style={{
              width: "18rem",
              height: "10rem",
              background: "white",
              margin: "24px",
              marginTop: "90px",
              boxShadow: "5px 5px 5px #333333",
            }}
          >
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={datas.img}
                title="Contemplative Reptile"
              />
            </CardActionArea>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Back;
