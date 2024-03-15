import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import chatify from "../../Assets/Projects/chatify.png";
import eagle from "../../Assets/Projects/eagle.png";
import calm from "../../Assets/Projects/PortOne.png";
import sheet from "../../Assets/Projects/sheets.png";
import logo from "../../Assets/Projects/logo.png";


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
              title="EagleWatch Surveillance - coming 2025"
              buttonname = "Presentation"
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

              description="Using AI, we can check, scan, and flag messages that fit certain categories. Like: Toxic, Flirty, Scam, and more!"
              ghLink=""
             
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sheet}
              isBlog={false}
              title="Monthly budget"
                            buttonname = "Copy the template HERE"

              description="Using Google Sheets and a little bit of scripting, this project allows anyone to make a zero based budget. This comes with multiple automations, like showing how much you need to spend or gain."
              ghLink=""
              demoLink="https://docs.google.com/spreadsheets/d/1kuR_OrrvWqsr-hTS2oBGCez4y2dgKVuHhe2NJmzQokA/edit?usp=sharing"
            />
          </Col>

           <Col md={4} className="project-card">
                    <ProjectCard
                      imgPath={logo}
                      isBlog={false}
                      title="YouTube Video Embed Converter"
                                    buttonname = "Try here!"

                      description="This is just a basic HTML site that uses youtubes embed feature to add a Start/Stop time to a video. "
                      ghLink="https://github.com/garbar211/YouTube-Video-Embed-Converter"
                      demoLink="https://garbar211.github.io/YouTube-Video-Embed-Converter/"
                    />
                  </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
