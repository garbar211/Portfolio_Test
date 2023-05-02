import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import eagle from "../../Assets/Projects/eagle.png";
import calm from "../../Assets/Projects/PortOne.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eagle}
              isBlog={false}
              title="EagleWatch Surveillance - coming 2024"
              buttonname = "Presintation"
              description="Weapon Detection using AI, for schools, buildings, and other locations. Detecting threats and sending alerts within seconds!"
              ghLink=""
    demoLink="https://docs.google.com/presentation/d/1ZcAiHDQe0T2eZ2LliJ1tqlSUVj1wAtiMtwVAxtaL5fc/edit"
            />
          </Col>

   <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calm}
              isBlog={false}
              title="CalmDown"
                            buttonname = "API here!"

              description="Using Google API, we can check, scan, and flag messages that fit certain categories. Like: Toxic, Flirty, Scam, and more! NOTE: This is the service I USE, the API is public for others, hosted by google."
              ghLink=""
              demoLink="https://perspectiveapi.com/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
