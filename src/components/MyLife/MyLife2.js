import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Hand.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { ImPointRight } from "react-icons/im";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Some other <span className="purple"> activies </span> I do
            </h1>
            <p className="home-about-body">
              I love to help out all the time! Making people smile makes me smile :)
              <br />
              <br /> Some things I help out with are:
               <ul>
            <li className="about-activity">
              <ImPointRight /> Picking up trash outside along roads, and public areas
            </li>
            <li className="about-activity">
              <ImPointRight /> Helping out at church suppers
            </li>
            <li className="about-activity">
              <ImPointRight /> Feeding the homeless.
            </li>
          </ul>
              <br />
              <br />
              Whenever possible, I also apply my passion for code and building 
              to <b className="purple">help</b> and
              <i>
                <b className="purple">
                  {" "}
                  solve their issues
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> Worksheets and computer issues</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="Helping Hand" />
            </Tilt>
          </Col>
        </Row>
       
      </Container>
    </Container>
  );
}
export default Home2;
