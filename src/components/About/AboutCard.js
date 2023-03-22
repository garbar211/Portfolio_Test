import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple"> Garret </span>
            from <span className="purple"> Putnum County, OH.</span>
            <br />I am a Senior in High School, going to college for Web/Computer Programming
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Going outside
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing with new technolagy
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Everyone in this country should learn how to program because it teaches you how to think"{" "}
          </p>
          <footer className="blockquote-footer">Steve Jobs</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
