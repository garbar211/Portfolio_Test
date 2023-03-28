import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "This dude is cool - John Doe        ",
          "WOah! Something should go here - Guy 1        ",
          "I have not got people to do this yet!! - me        ",
          "I should really get on this - me        ",
          "I wanted free pizza.... - Jane Doe        ",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
