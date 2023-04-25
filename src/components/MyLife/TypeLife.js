import React from "react";
import Typewriter from "typewriter-effect";
import homeLogo from "../../Assets/RocketLogo.jpeg";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          `<img src="${homeLogo}" alt="Test 1"/><br/><b style="text-align:center;">Garret has demonstrated a strong work ethic, leadership skills, and a positive attitude. He has earned the respect and admiration of his peers and teachers alike.  - Sarah Schroeder </b>`,
          `<img src="${homeLogo}" alt="Test 1"/><br/> <b style="text-align:center;">He is a trustworthy young man that takes pride in his work and means the best for all he encounters. I am confident that he will be an asset in his future workplace environment.  - Sarah Schroeder</b>`,
         
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