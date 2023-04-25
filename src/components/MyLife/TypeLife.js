import React from "react";
import Typewriter from "typewriter-effect";
import homeLogo from "../../Assets/RocketLogo.jpeg";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          `<br/><b style="text-align:center;"> - Sarah Schroeder - Garret has demonstrated a strong work ethic, leadership skills, and a positive attitude. He has earned the respect and admiration of his peers and teachers alike. </b>`,
          `9<br/> <b style="text-align:center;">Sarah Schroeder - He is a trustworthy young man that takes pride in his work and means the best for all he encounters. I am confident that he will be an asset in his future workplace environment. </b>`,
         
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