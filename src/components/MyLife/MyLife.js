import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.svg";
import Particle from "../Particle";
import Home2 from "./MyLife2";
import Type from "./TypeLife";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                What people say about me{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  💬
                </span>
              </h1>

              <h1 className="heading-name">
                
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>

                 <h1 className="heading-name">
                
                <strong className="main-name"> "</strong>
              </h1>
                <Type />
                   <h1 className="heading-name">
                
                <strong className="main-name"> "</strong>
              </h1>
          

              </div>
            </Col>

            
          </Row>
        </Container>
      </Container>
          <iframe src="https://docs.google.com/document/d/e/2PACX-1vQRR2jdDe5GFOHjgzJa83XmhK5RLxWIWmCgQy0VvTOPjrz5gKk42iqXI3F-eW7AJoOviS8ra4g0lHph/pub?embedded=true"></iframe>
      <Home2 />
    </section>
  );
}

export default Home;
