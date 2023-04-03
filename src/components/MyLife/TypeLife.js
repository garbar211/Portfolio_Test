import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Wow! He is really cool! -<a href='https://www.google.com' style='color: blue; font-weight: bold;'> Mack</a>",
          "Wow! He is really REALLY COOL! -<a href='https://www.google.com' style='color: blue; font-weight: bold;'> Bob</a>",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        escapeHtml: false, // set escapeHtml to true
      }}
    />
  );
}

export default Type;