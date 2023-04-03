import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "This dude is cool - John Doe",
          "WOah! Something should go here - Guy 1",
          "I have not got people to do this yet!! - me",
          "I should really get on this - me",
          "I wanted free pizza.... - Jane Doe",
          "Wow! He is really cool! <a href='https://www.google.com' style='color: blue; font-weight: bold;'>- Mack</a>",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        escapeHtml: false,
      }}
    />
  );
}

export default Type;