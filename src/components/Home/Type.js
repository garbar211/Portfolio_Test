import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "A Developer",
          "A Deep Learning Engineer",
          "An Open Source Contributor",
          "A Project Finisher",
          "A community supporter",
          "A startup inventor"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
