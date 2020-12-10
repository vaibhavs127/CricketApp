import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import Img from "../Images/vs2.jpg";
import "./LiveCard.css";

function LiveCard() {
  const [data, setData] = useState([]);
  const API_KEY = "08DWVaQPuiXgEwVYJNEPkvzpGCJ3";

  useEffect(() => {
    axios
      .get(
        `https://cricapi.com/api/cricketScore/?apikey=${API_KEY}&unique_id=1237417`
      )

      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      {[data].map((datas) => (
        <div>
          <Grid container justify="center">
            <Card
              id="mob"
              style={{
                width: "40rem",
                height: "20rem",
                background: "black",
                // margin: "20px 24px",
                marginLeft: "-610px",
                opacity: "0.7",
                boxShadow: "5px 5px 5px #333333",
                marginTop: "220px",
              }}
            >
              <CardContent>
                <Grid
                  container
                  justif="center"
                  spacing={4}
                  style={{ marginLeft: "30px" }}
                >
                  <Grid item>
                    <Typography
                      style={{
                        color: "white",
                        fontSize: "45px",
                        fontWeight: "bold",
                      }}
                    >
                      {datas["team-1"]}
                    </Typography>
                  </Grid>
                  <Grid item>
                    <img src={Img} width="100px" alt="" />
                  </Grid>
                  <Grid item>
                    <Typography
                      style={{
                        color: "white",
                        fontSize: "45px",
                        fontWeight: "bold",
                      }}
                    >
                      {datas["team-2"]}
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
              <CardContent>
                <Typography
                  style={{
                    color: "white",
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  {datas.score}
                </Typography>
                <Typography
                  style={{
                    color: "orange",
                    fontSize: "30px",
                    fontWeight: "bold",
                    textAlign: "center",
                    border: "1px solid orange",
                    marginTop: "12px",
                  }}
                >
                  {datas.stat}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </div>
      ))}
    </div>
  );
}

export default LiveCard;
