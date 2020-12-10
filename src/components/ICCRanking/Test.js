import { Grid } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import TeamData from "./TestRank.json";
import logo from "../Images/test.jpg";

function Test() {
  fetch("./Team.json")
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  return (
    <div>
      <Grid
        container
        spacing={4}
        justify="center"
        style={{
          borderTop: "1px solid black",
          backgroundColor: "#6d9bc9",
          fontSize: "20px",
        }}
      >
        <Grid item xs={6} sm={2}>
          <h1 style={{ textAlign: "center" }}>TEST</h1>
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
    </div>
  );
}

export default Test;
