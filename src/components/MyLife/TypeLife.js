import React from "react";
import Typewriter from "typewriter-effect";
import homeLogo from "../../Assets/Screenshot 2023-03-30 2.17.00 PM.png";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          '<img src=homeLogo alt="Test 1"/><br/><b style="text-align:center;">John Doe</b>',
          '<img src=homeLogo alt="Test 2"/><br/><b style="text-align:center;">Jane Doe</b>',
          '<img src=homeLogo alt="Test 3"/><br/><b style="text-align:center;">James Smith</b>'
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