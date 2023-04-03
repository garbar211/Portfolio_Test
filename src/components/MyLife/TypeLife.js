import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  const strings = [
    "Wow this dude is really cool! - ",
    { name: "Jeff", link: "https://example.com" },
  ];

  const options = {
    autoStart: true,
    loop: true,
    deleteSpeed: 50,
    onInit: (typewriter) => {
      strings.forEach((string) => {
        if (typeof string === "string") {
          typewriter.typeString(string);
        } else {
          typewriter
            .pauseFor(500)
            .typeString(`<a href="${string.link}"><strong style="color: blue;">${string.name}</strong></a>`);
        }
      });
    },
  };

  return <Typewriter options={options} />;
}

export default Type;