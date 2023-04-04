import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Typewriter
        options={{
          strings: ["That guy is COOL"],
          autoStart: true,
          loop: true,
          deleteSpeed: 50,
        }}
      />
      <div style={{ marginLeft: "20px" }}>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR_xVyQmNWWJYOWyuZclW4-HpZQD1NHHIqoWx9SW0GBr26cIZ95kjVC0T1H5FMVnu_nR0:https://cdn-icons-png.flaticon.com/512/2815/2815428.png&usqp=CAU" alt="Image" width="100" height="100" />
        <p style={{ fontWeight: "bold" }}>John Doe</p>
      </div>
    </div>
  );
}

export default Type;