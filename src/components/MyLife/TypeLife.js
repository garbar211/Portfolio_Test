import React from "react";
import Typewriter from "typewriter-effect";
import homeLogo from "../../Assets/RocketLogo.jpeg";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
            `<br/><b style="text-align:center;">Leo Recker - He works very well with others, assuming leadership roles and collaborating with his peers. </b>`,
          `<br/><b style="text-align:center;">Sarah Schroeder - Garret has demonstrated a strong work ethic, leadership skills, and a positive attitude. He has earned the respect and admiration of his peers and teachers alike. </b>`,
           `<br/> <b style="text-align:center;">Jacqi Morris - Garret’s work ethic and ability to complete a task in a timely manner, as well as on target, is above and beyond what is expected of a student. </b>`,
          `<br/><b style="text-align:center;">Leo Recker - He has been a leader in and out of the classroom and I am very confident that he will achieve much in his life. </b>`,
          `<br/> <b style="text-align:center;">Sarah Schroeder - He is a trustworthy young man that takes pride in his work and means the best for all he encounters. I am confident that he will be an asset in his future workplace environment. </b>`,
            `<br/> <b style="text-align:center;">Jacqi Morris -  Garret sets a great example in the classroom as well as in the workforce! </b>`,
          
         
        ],
        autoStart: true,
        loop: true,
        delay: 75,
        pauseFor: 2000,
        deleteSpeed: 50,
        escapeHtml: false
        
      }}
    />
  );
}

export default Type;