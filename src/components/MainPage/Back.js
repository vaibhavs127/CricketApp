import React from "react";
import ReactPlayer from "react-player";

function Back() {
  return (
    <div>
      <ReactPlayer
        url="https://www.youtube.com/watch?v=dMGRTR97Ito"
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />
    </div>
  );
}

export default Back;
