import React, { useState, useEffect } from "react";
import TeamData from "./Team.json";

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
      <table>
        <th>Team</th>
        <th>Matches</th>
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
    </div>
  );
}

export default ODI;
