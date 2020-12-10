import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import TeamData from "./Team.json";
import Nav from "../News/Nav";
import T20Ranking from "./T20Ranking";
import Test from "./Test";
import logo from "../Images/odi.jpg";

function ODI() {
  fetch("./Team.json")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });

  return (
    <div>
      <Nav />

      <Grid
        container
        spacing={4}
        justify="center"
        style={{
          backgroundColor: "#6d9bc9",
          fontSize: "20px",

          marginTop: "1px",
        }}
      >
        <Grid item xs={6} sm={2}>
          <h1 style={{ textAlign: "center" }}>ODI</h1>
          <img src={logo} width="100%" />
        </Grid>
        <Grid item xs={6} sm={1}>
          <table>
            <th>Ranking</th>
          </table>
          {TeamData.map((post) => {
            return (
              <>
                <table>
                  <tr>{post.id}</tr>
                </table>
              </>
            );
          })}
        </Grid>
        <Grid item xs={6} sm={3}>
          <table>
            <th>Team</th>
          </table>
          {TeamData.map((post) => {
            return (
              <>
                <table>
                  <tr>{post.Team}</tr>
                </table>
              </>
            );
          })}
        </Grid>
        <Grid item xs={6} sm={2}>
          <table>
            <th>Matches</th>
          </table>
          {TeamData.map((post) => {
            return (
              <>
                <table>
                  <tr>{post.Matches}</tr>
                </table>
              </>
            );
          })}
        </Grid>
        <Grid item xs={6} sm={2}>
          <table>
            <th>Points</th>
          </table>
          {TeamData.map((post) => {
            return (
              <>
                <table>
                  <tr>{post.Points}</tr>
                </table>
              </>
            );
          })}
        </Grid>
        <Grid item xs={6} sm={1}>
          <table>
            <th>Raiting</th>
          </table>
          {TeamData.map((post) => {
            return (
              <>
                <table>
                  <tr>{post.Rating}</tr>
                </table>
              </>
            );
          })}
        </Grid>
      </Grid>

      <T20Ranking />
      <Test />
    </div>
  );
}

export default ODI;
