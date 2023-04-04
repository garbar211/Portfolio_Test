import React from "react";
import Typewriter from "typewriter-effect";
import homeLogo from "../../Assets/TheImage.png";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          `<img src="${homeLogo}" alt="Wow he is really cool"/><br/><b style="text-align:center;">John Doe</b>`,
          `<img src="${homeLogo}" alt="Wow he is TOO cool"/><br/><b style="text-align:center;">Jane Doe</b>`,
          `<img src="${homeLogo}" alt="Yeah idk what to put here-"/><br/><b style="text-align:center;">James Smith</b>`
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        escapeHtml: false
      }}
    />
  );
}

export default Type;