import React, { Fragment, useEffect, useState } from "react";
import Cards from "./components/Cards/Cards";
import NavBar from "./components/NavBar/NavBar";
import { getLiveScore, getMatches, getNews } from "./Api/Api";

function Data() {
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
      <NavBar />
      {matches.map((match) => (
        <Fragment>
          {/* {match["team-1"] && match["team-2"] === "India" ? (
            <Cards key={match.unique_id} match={match} />
          ) : (
            ""
          )} */}
          {match.type == "Twenty20" ? (
            <Cards key={match.unique_id} match={match} />
          ) : (
            ""
          )}
        </Fragment>
      ))}
    </div>
  );
}

export default Data;
