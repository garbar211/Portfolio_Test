import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Wow! He is really cool! -<a href='https://www.google.com' style='color: blue; font-weight: bold;'> Mack</a>",
          "Wow! He is really REALLY COOL! -<a href='https://www.google.com' style='color: blue; font-weight: bold;'> <a href='https://www.google.com' style='color: blue; font-weight: bold;'>Bob</a></a>",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
        escapeHtml: false, // set escapeHtml to true
      }}
      onInit={(typewriter) => {
        typewriter
          .pauseFor(2000)
          .callFunction(() => {
            const links = document.querySelectorAll("a");
            links.forEach((link) => {
              link.addEventListener("click", () => {
                window.open(link.href, "_blank");
              });
            });
          })
          .start();
      }}
    />
  );
}

export default Type;