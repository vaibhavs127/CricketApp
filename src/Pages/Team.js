import React, { Fragment, useEffect, useState } from "react";
import Cards from "../components/Cards/Cards";
import NavBar from "../components/NavBar/NavBar";
import { getMatches } from "../Api/Api";
import { Grid } from "@material-ui/core";
import Background from "../components/Images/back2.jpg";

function Team() {
  const [matches, setMatches] = useState([]);
  const [Livematch, setLiveMatch] = useState([]);
  useEffect(() => {
    getMatches()
      .then((data) => {
        setMatches(data.matches);
        console.log(data.matches);
      })
      .catch();
  }, []);

  return (
    <div className="App">
      <section
        style={{
          backgroundImage: `url(${Background})`,
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          width: "100%",
        }}
      >
        <Grid container>
          <Grid item xs={12} sm={12}>
            <NavBar />
            <h1 style={{ textAlign: "center", color: "blue" }}>Team Match</h1>
          </Grid>
          <Grid item xs={8} sm={10} style={{ marginLeft: "20%" }}>
            {" "}
            {matches.map((match) => (
              <Fragment>
                {match["team-1"] && match["team-2"] === "India" ? (
                  <Cards key={match.unique_id} match={match} />
                ) : (
                  ""
                )}
                {/* {match.type == "Twenty20" ? (
                <Cards key={match.unique_id} match={match} />
              ) : (
                ""
              )} */}
              </Fragment>
            ))}
          </Grid>
        </Grid>
      </section>
    </div>
  );
}

export default Team;
