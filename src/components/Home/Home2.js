@@ -2,12 +2,13 @@ import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
import AnimatedSocialIcons from "./AnimatedSocialIcons";

function Home2() {
  return (
@@ -65,7 +66,7 @@ function Home2() {
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
              {/* <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
@@ -104,8 +105,9 @@ function Home2() {
                >
                  <AiFillInstagram />
                </a>
              </li>
              </li> */}
            </ul>
            <AnimatedSocialIcons />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;